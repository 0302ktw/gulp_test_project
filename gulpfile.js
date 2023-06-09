'use strict';

const postcss = require('gulp-postcss');
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const bs = require('browser-sync').create();
const cache = require('gulp-cache');
const sourcemaps = require('gulp-sourcemaps');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssclean = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const fileinclude = require('gulp-file-include');
const del = require('del');
const autoprefixer = require('autoprefixer');
const doiuse = require('doiuse');
const notify = require("gulp-notify");
const newer = require("gulp-newer");


/*
  -------------------------------------------------------------------
  # Config - 개발 환경 설정
  -------------------------------------------------------------------
  - es5 : ES6 Script 사용여부 (true로 설정하면 es6 코드는 es5로 build)
  - doiuse : Can I Use 데이터 베이스를 기반으로 지원하지 않는 CSS 속성에 대한 로그 메시지 출력
*/
const config = {
  es5: false,
  cssCompressing: true,
  doiuse: {
    browsers: [
      'ie >= 11'
    ],
    ignore: ['css-resize','css-appearance','outline', 'calc', 'rem', 'flexbox', 'transforms3d', 'css-filters', 'pointer-events', 'pointer', 'css-initial-value', 'object-fit', 'text-size-adjust', 'viewport-units', 'css-unset-value'],
    ignoreFiles: ['']
  }
}

const basedir = 'src';
const destdir = 'dist';
const mapsdir = 'src/maps';
const pagesdir = 'src/pages';
const cssdir = 'src/css'
const paths = {
  scss: {
      src: basedir + '/scss/**/*.scss',
      dest: basedir + '/css'
  },
  html: {
      src: basedir + '/html/**/*.html',
      dest: basedir + '/pages'
  },
  pages: {
    src: basedir + '/pages/**/*.html',
    dest: destdir + '/pages'
  },
  fonts: {
      src: basedir + '/font/**/*',
      dest: destdir + '/font'
  },
  js: {
      src: basedir + '/js/**/*.j*',
      dest: destdir + '/js'
  },
  css: {
      src: basedir + '/css/*.css',
      dest: destdir + '/css'
  },
  videos: {
      src: basedir + '/videos/**/*.+(mp4|avi|mkv|wmv|mov)',
      dest: destdir + '/videos'
  },
  index: {
      src: basedir + '/index.html',
      dest: destdir
  },
  images: {
      src: basedir + '/images/**/*.+(png|jpg|jpeg|gif|svg|ico|mp4|webp)',
      dest: destdir + '/images'
  },
  include: {
      src: basedir + '/include/**/*'
  }
};


/*
  -------------------------------------------------------------------
  # Development Tasks
  -------------------------------------------------------------------
*/

const browserSync = done => {
  bs.init({
    server: {
      baseDir: basedir
    }
  })
}
const browserSyncStream = path => {
  cache.clearAll();
  return gulp.src(path).pipe(bs.stream());
};
const browserSyncReload = path => {
  cache.clearAll();
  return gulp.src(path).pipe(bs.reload({ stream: true }));
};

//  scss 컴파일
const scss = () => {
  let isError = false;
  const processors = [
    autoprefixer({ cascade: false }),
    doiuse({
      browsers: config.doiuse.browsers,
      ignore: config.doiuse.ignore,
      ignoreFiles: config.doiuse.ignoreFiles,
      onFeatureUsage: function (usageInfo) {
        // console.log(usageInfo)
      }
    })
  ];
  return gulp
      .src(paths.scss.src)
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
      .pipe(postcss(processors))
      .pipe(gulpIf(config.cssCompressing, cssclean()))
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest(paths.scss.dest));
      // .pipe(notify({ message: 'SCSS Compile Error', wait: true }));
};

// html 파일 include
const include= () => {
  return gulp.src(paths.html.src)
    // .pipe(newer(paths.html.dest)) 		// todo : test 
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.html.dest));
};

// dist, src/css, src/maps 디렉토리 제거
const clean = () => del([destdir, cssdir, mapsdir, pagesdir]);
const log = () => {
  console.log('reload')
}


// 파일 변경 감지
const watch = () => {
  gulp.watch(paths.scss.src, scss).on('change', path => {config.cssCompressing = true;browserSyncStream(path);});
  gulp.watch(paths.html.src, include).on('change', path => browserSyncStream(path));
  gulp.watch(paths.include.src, include).on('change', path => browserSyncStream(path));
  gulp.watch(paths.js.src, log).on('change', path => browserSyncStream(path));  
};

/*
  -------------------------------------------------------------------
  # Build (Optimization, Bundling) Tasks
  -------------------------------------------------------------------
*/

  /* 
    1. js/lib 파일 압축 및 난독화
  */
  const optimizationLib= () => {
    return gulp.src('dist/js/lib/plugins.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js/lib'));
  };

  /* 
    1. js 파일 압축 및 난독화
  */
    const optimization= () => {
        return gulp.src('dist/js/*.js')
          .pipe(uglify())
          //.pipe('uglifyjs ./dist/js/common.js -o ./dist/js/common.js -m')
          //.pipe(gulpIf('*.css', cssnano()))
          .pipe(gulp.dest(paths.js.dest));
      };
    

  /* 
    1. html (pages) 파일 변경유무 확인
    2. useref 규칙에 따른 소스 병합 및 생성
    3. dist 로 이동
  */
    const pages= () => {
        return gulp.src(paths.pages.src)
        .pipe(newer(paths.pages.dest))  // todo : test  
        .pipe(gulp.dest(paths.pages.dest));
      };

  /* 
    1. 폰트 변경유무 확인
    2. dist 로 이동
  */
  const fonts= () => {
    return gulp.src(paths.fonts.src)
      .pipe(newer(paths.fonts.dest))  		// todo : test 
      .pipe(gulp.dest(paths.fonts.dest))
  };

  /* 
    1. JavaScript 변경 유무 확인
    2. config 설정에 따른 es6 컴파일
    3. dist 로 이동
  */
  const js= () => {
    return gulp.src(paths.js.src)
      .pipe(newer(paths.js.dest)) 			// todo : test 
      .pipe(gulpIf(config.es5, babel({
        presets: ['@babel/preset-env'],
        retainLines: false,
        comments: false,
        compact: false,
        minified: false
      })))
      .pipe(gulp.dest(paths.js.dest))
  };

  /* 
    1. CSS 변경유무 확인
    2. dist 로 이동
  */
  const css= () => {
    return gulp.src(paths.css.src)
      .pipe(newer(paths.css.dest))  		// todo : test 
      .pipe(gulp.dest(paths.css.dest))
  };

  /* 
    1. 이미지 변경유무 확인
    2. 이미지 파일 최적화
    3. dist 로 이동
  */
  const images= () => {
    return gulp.src(paths.images.src)
    .pipe(newer(paths.images.dest)) 		// todo : test 
  //  .pipe(cache(imagemin({
  //    interlaced: true,
  //  })))
    .pipe(gulp.dest(paths.images.dest))
  };


  /* 
    - Video 파일 dist 로 이동
  */
  const videos= () => {
    return gulp.src(paths.videos.src)
      .pipe(gulp.dest(paths.videos.dest))
  };

  /* 
    - index 파일 dist 로 이동
  */
  const index= () => {
    return gulp.src(paths.index.src)
      .pipe(gulp.dest(paths.index.dest))
  };

  /* 
    - css 압축 여부
  */
    const isCSSCompressing = (cb) => {
      config.cssCompressing = false;
      cb();
    };

/*
  -------------------------------------------------------------------
  # Execute Tasks
  -------------------------------------------------------------------
*/

const serve = gulp.series(
  clean,
  gulp.parallel(browserSync, scss, include, watch)
);

const build = gulp.series(
  clean,
  isCSSCompressing,
  scss,
  include,
  pages,
  gulp.parallel(fonts, js, css, images, videos)
);

const minify = gulp.series(
    optimizationLib,
    optimization
);
  

gulp.task("clean", clean);
gulp.task('default', serve);
gulp.task('build', build);
gulp.task('minify', minify);
