### 1. 개발환경 설정

본 프로젝트는 Gulp로 구성 되어 있으며 다음 환경에서 정상적인 개발이 가능합니다.

개발환경

    node.js : 8.11.4 이상 (LTS 버전)
    gulp-cli : 2.0.1<br>
    gulp : 4.0.2

* * *

### 2. node.js 설치

node.js의 버전은 LTS로 다운로드 합니다. [[다운로드]](https://nodejs.org/ko/)
이미 설치 된 경우 본 과정을 생략 할 수 있습니다.

`cmd`, `powershell`, `Terminal` 을 실행 후 다음 설명에 따라 설치를 진행 합니다.

* * *

### 3. gulp-cli 설치

전역에 gulp-cli 를 설치 합니다.

> cmd
    npm install -g gulp-cli

* * *

### 4. 버전 확인

설치 한 node.js, gulp-cli 버전을 확인 합니다.

> cmd
    node -v

    /* Result */
    v8.11.4

    gulp -v

    /* Result */
    CLI version 2.0.1

결과가 위 버전보다 낮을 경우 상위 버전으로 재설치가 필요 합니다.

* * *

### 5. Project 패키지 설치

`package.json` 파일에 정의된 필수 모듈을 설치 합니다.

> project path terminal > npm install


아래는 현재 정의 된 모듈의 버전입니다. 필수 모듈의 버전을 업데이트 시 정상 동작하지 않을 수 있습니다.

    @babel/core        ^7.11.6
    @babel/preset-env  ^7.11.5
    autoprefixer        ^9.8.6
    del                 ^4.1.0
    doiuse              ^4.2.0
    gulp-cache          ^1.1.1
    gulp-file-include   ^2.2.2
    gulp-if             ^2.0.0
    gulp-imagemin       ^7.1.0
    gulp-notify         ^3.2.0
    gulp-postcss        ^8.0.0
    gulp-sass           ^4.1.1
    gulp-sourcemaps     ^2.6.5
    gulp-uglify         ^1.5.4
    gulp-useref         ^3.0.4
    node-sass           ^7.0.1
    sass               ^1.42.1
    smooth-scrollbar    ^8.6.2

위 모듈을 활용한 태스크 관리는 `gulpfile.js` 파일에서 이루어집니다.

* * *

### 6. 웹서버 실행하기

> project path terminal > gulp


웹서버 실행 후 터미널에서 다음 메시시가 확인 되면 모든 준비가 완료 된 상태입니다.

    Local: http://localhost:3000
    External: http://121.131.27.204:3000

    UI: http://localhost:3001
    UI External: http://localhost:3001

    [Browsersync] Serving files from: src

브라우저에서 http://localhost:3000 으로 접속후 개발을 시작하세요.

port 번호는 개발 환경에 따라 달라질 수 있습니다.

* * *

### 7. 소스 빌드하기

> project path terminal > gulp build

터미널에서 위 명령어를 입력하면 `src` 폴더와 같은 레벨의 경로에 `dist` 폴더가 생성되어,

sass 파일은 `common.css` 와 `component.css` 두개의 파일로 컴파일됩니다.

그러므로, 마크업 시 파일의 경로를 잡을 때 `dist` 폴더를 기준으로 잡으면 됩니다.