$(function() {
    'use strict';

    /* DEFINE */
    const stateMouseEnterWithScroll = 1, stateMouseLeave = 2, stateMouseDoNotLeave = 3,
          defNextSliderAmount = 30,
          optionFixedWhenPageSlider = false; // yj.baek 0728 option : page slide motion

    /* SELECTOR */
    var $section             = $('.guide-section'),
        $guideTitle          = $('.guide__tit'),
        $fileTarget          = $('.c-form__file-field input[type="file"]'),
        $btnTab              = $('.c-tab__btn'),
        $inputList           = $('.c-form__input'),
        $paging              = $('.paging-current'),
        $pagingTotal         = $('.paging-total'),
        $crossEffect         = $('.cross-effect'),
        $scrollElm           = $('.scroll'),
        $sectionTitleArea    = $('.main__wrap .title-area'),
        $sectionDescTitle    = $('.main__wrap .descriptions .desc-title'),
        $sectionDescTitleTxt = $('.main__wrap .descriptions .desc-title--text'),
        $sectionDesc         = $('.main__wrap .descriptions .desc'),
        $btnMenu             = $('.c-gnb__btn-menu'),
        $gnb                 = $('.c-gnb'),
        $menuWrap            = $('.menu-wrap'),
        $headDesc            = $('header .descriptions'),
        $main                = $('.main'),
        $mainWrap            = $('.main__wrap'),
        $footer              = $('footer'),
        $footerHeader        = $('.footer__header'),
        $footerMainBody      = $('.footer--main .footer__body'),
        $footerBody          = $('.footer__body'),
        $sections            = $('.main__wrap .section-wrap'),
        $contactPrj          = $('.contact-pjt');

    /* ID */
    var timerScroll = undefined,
        timerTitleMouseEnter = undefined,
        timerTitleMouseEnterRotate = undefined,
        timerTitleMouseLeave = undefined,
        timerFooterActive = undefined;

    /* STATE */
    var lastScrollPosition = 0,
        stateScrollWhenMouseEnterToTitleArea = stateMouseLeave,
        lastSectionIndex = 0,
        lastScrollTopPosition = 0;
  
    /* VARIABLE : any */
    window.PIVOT = { projects : null };
    var iCanScroll  = true,
        prevTime    = +new Date();

    /* EVENT start */
    var events = {
        moveSlideView : function () {},

        moveListView : function(index, direction, speed) {
            //console.log('moveListView begin : index = ' + index);
            if ($main.find('.main__wrap').length === 0 ) return false;

            // init
            clearTimeout(timerScroll);
            clearTimeout(timerTitleMouseLeave);
            clearTimeout(timerTitleMouseEnter);
            clearTimeout(timerTitleMouseEnterRotate);
            onActiveCurrentSection(index);
            if ($sectionTitleArea.find('.mouse-enter').length > 0 ) stateScrollWhenMouseEnterToTitleArea = stateMouseEnterWithScroll;
            $main.removeClass('active').addClass('prepare');
            $sectionTitleArea.removeClass('active').removeClass('hide').removeClass('mouse-enter')
            $sectionDescTitle.fadeOut();
            $sectionDesc.fadeOut();
            $('.title-area .cross').removeClass('mouse-leave').removeClass('mouse-enter');
            $('section').css('position', 'absolute');
            $('.dim').removeClass('dark');
            //--

            // scroll action
            var viewPort = 0,
                height = 0,
                top = 0,
                nextIndex = index, 
                lastIndex = nextIndex - direction;

            if(direction < 0) {
                viewPort = 100;
                if(lastSectionIndex === PIVOT.projects.length) {
                    viewPort = 0;
                     $footer.removeClass('active prepare');
                     $footerMainBody.removeClass('active');
                }
            }
            else {
                if(lastSectionIndex === PIVOT.projects.length) return true;
    
                if (nextIndex === PIVOT.projects.length) {
                    viewPort = -50;
                    
                    $footer.addClass('prepare');
                    timerFooterActive = setTimeout(function() {
                        $footer.addClass('active');
                        $footerMainBody.addClass('active');
                        $('#section_' + (nextIndex)).css('top',  (viewPort * 2) + 'vh');
                    }, 800);
                }
            }

            if (index === PIVOT.projects.length) {
                mainHidden(true);
            } 
            else 
            {
                mainHidden(false);
                timerScroll = setTimeout(function() {
                    $sectionDescTitle.fadeIn();
                    $sectionDesc.fadeIn();
                    $sectionTitleArea.find('a').attr('href', PIVOT.projects[index].url);
                    $sectionTitleArea.find('h2').text(PIVOT.projects[index].title);
                    $sectionDescTitleTxt.text(PIVOT.projects[index].subTitle);
                    $sectionDesc.text(PIVOT.projects[index].desc);
                    $main.removeClass('prepare').addClass('active');
                    $sectionTitleArea.addClass('active');
                }, 800);
            }

            setLastSectionIndex(nextIndex);
            if(optionFixedWhenPageSlider === true) {
                if(direction < 0) nextIndex = index + 1;
                if(nextIndex === PIVOT.projects.length) nextIndex--;
                $('#section_' + (nextIndex)).css('top',  viewPort + 'vh');
            }
            else {
                if(direction < 0) { 
                    top = defNextSliderAmount; 
                    height = 100;
                    if(nextIndex === PIVOT.projects.length - 1) $('#section_' + (PIVOT.projects.length - 1)).css('top',  0 + 'vh'); 
                }

                if(nextIndex === PIVOT.projects.length) {
                    nextIndex--;
                    if(optionFixedWhenPageSlider === false) $('#section_' + (nextIndex)).css('top',  (viewPort) + 'vh');
                }
                else {
                    if(direction < 0) {
                        $('#section_' + (nextIndex)).css({'height': height + 'vh', 'top' : 0 + 'vh'}); 
                        $('#section_' + (lastIndex)).css('top',  top + 'vh'); 
                    }
                    else {
                        $('#section_' + (lastIndex)).css({'height': height + 'vh', 'top' : top + 'vh'}); 
                        $('#section_' + (nextIndex)).css('top',  0 + 'vh'); 
                    }
                }
            }
        },

        moveWheel : function(e) {
            var curTime = +new Date();
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var value = e.wheelDelta || -e.deltaY || -e.detail,
                direction = Math.max(-1, Math.min(1, value)),
                nextIndex = (direction < 0) ? -1 : 1,
                isHorizentalScroll = this.className.indexOf('slide') >= 0 ? true : false,
                timeDiff = curTime - prevTime;

            iCanScroll = false;
            prevTime = curTime;

            if (timeDiff < 300 || $gnb.hasClass('active') === true) return true;
            nextIndex = nextIndex + lastSectionIndex;
            nextIndex = Math.max(Math.min(nextIndex, PIVOT.projects.length), 0);

            if ($('#main .contact-title').hasClass('active') === true) {
                closeContactUs();
            } else {
                if (nextIndex === lastSectionIndex) return true;
                if (nextIndex === PIVOT.projects.length - 1 && lastSectionIndex === PIVOT.projects.length) clearTimeout(timerFooterActive);
                events.moveListView(nextIndex, direction, 500);
            }
            
            iCanScroll = true;
        },

        touch : function(e) {
            var direction = (e.up === true) ? -1 : 1,
                nextIndex = (e.up === true) ? -1 : 1;
            // console.log('touch : ' + (e.up | e.down | e.left | e.right) + 
            //              ', up : ' + e.up +
            //              ', down : ' + e.down +
            //              ', left : ' + e.left +
            //              ', right : ' + e.right
            // );

            nextIndex = nextIndex + lastSectionIndex;
            nextIndex = Math.max(Math.min(nextIndex, PIVOT.projects.length), 0);

            if ($gnb.hasClass('active') === true) return true;
            
            if ($('#main .contact-title').hasClass('active') === true) {
                closeContactUs();
            } else {
                if (nextIndex === lastSectionIndex) return true;
                if (nextIndex === PIVOT.projects.length - 1 && lastSectionIndex === PIVOT.projects.length) clearTimeout(timerFooterActive);
                events.moveListView(nextIndex, direction, 500);
            }
        },

        keyMove : function(e) {
            var direction = 1;
            if ( e.which == 38 || e.which == 40 ) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                if (iCanScroll) {
                    var nextIndex;
                    if ( e.which == 38 ) {nextIndex = -1; direction = -1;}
                    else if ( e.which == 40 ) nextIndex = 1;
                    nextIndex = nextIndex + lastSectionIndex;
                    nextIndex = Math.max(Math.min(nextIndex, PIVOT.projects.length), 0);
                    if( lastSectionIndex != nextIndex ) events.moveListView(nextIndex, direction, 500);

                    return false;
                }
            }
        },

        mouseEnter : function (e) { 
            clearTimeout(timerTitleMouseLeave);
            clearTimeout(timerTitleMouseEnter);
            clearTimeout(timerTitleMouseEnterRotate);

            $sectionTitleArea.removeClass('hide').removeClass('active'); 
            $('.title-area .cross').removeClass('mouse-enter').removeClass('rotation').removeClass('mouse-leave');

            timerTitleMouseEnter = setTimeout(function() { 
                $('.title-area .cross').addClass('mouse-enter'); 
                console.log('mouse-enter');
                timerTitleMouseEnterRotate = setTimeout(function() { $('.title-area .cross').addClass('rotation'); $sectionTitleArea.addClass('hide'); }, 700); 
            }, 500); 

            // title은 expanding 되어도 bg-effect가 active가 안되는 경우가 있음(mouseLeave -> mouseEnter -> mouseLeave 때문)
            if (stateScrollWhenMouseEnterToTitleArea === stateMouseEnterWithScroll) stateScrollWhenMouseEnterToTitleArea = stateMouseDoNotLeave;        
        },

        mouseLeave : function (e) { 
            clearTimeout(timerTitleMouseEnter);
            clearTimeout(timerTitleMouseEnterRotate);

            $sectionTitleArea.removeClass('hide').addClass('active'); 
            if (stateScrollWhenMouseEnterToTitleArea === stateMouseDoNotLeave) {
                stateScrollWhenMouseEnterToTitleArea = 0;
                return false;
            }

            $('.title-area .cross').addClass('mouse-leave');
            console.log('mouse-leave');      

            timerTitleMouseLeave = setTimeout(function() { 
                $('.title-area .cross').removeClass('mouse-leave'); 
                setTimeout(function() { $('.title-area .cross').removeClass('mouse-enter'); $('.title-area .cross').removeClass('rotation'); }, 10);  
            }, 500);          
        }
    }; /* EVENT end */

    /* INITIALIZE */
    initialize();

    /* FUCNTIONS */
    function initialize() {
        console.log(document.title + ' initialize start...');
        console.log('$.browser.os = ' + $.browser.os);

        initSwiper();
        initMain();

        /* EVENTS */
        $(window).on('load', onLoadWindow);
        $(window).on('resize', onResizeWindow);
        setEventToGnb();
        setEventToMain();
        setEventToCloseLayerPopup();
        setEventToMask();
        setEventToEmail();
        setEventExpandContactUs();
        setEventOpenContactUs();
        checkDevice();

        $(document).on("click", ".tab-list .tab-item", function() {
            var $target = $(this);
            $target.siblings().removeClass('active');
            $target.addClass('active');
        });
        $fileTarget.on('change', onChangeTargetFile);
        $btnTab.on('click', onClickBtnTab);
        $inputList.on('keyup', onKeyupInput);
    }

    function onLoadWindow() {
        //console.log('onLoadWindow');
    }

    function onResizeWindow() {
        var viewportWidth = window.innerWidth;

        // $btnMenu.addClass('c-gnb__btn-menu--open-click');
        // $gnb.addClass('disable');
        // console.log('c-gnb__full-menu-item click');
    
        // if(viewportWidth >= 1023) {
        //     if($('.guide-section__header').hasClass('active')) {
        //         $('.guide-section__header').removeClass('active');
        //         $('.guide-section__close').removeClass('active');
        //         hideBodyMask();
        //     }
        // }

        // // main
        // if ($('.main').find('.portfolio-wrap').length > 0) {
        //     $('.bg-pattern').stop().animate({'top': 0 + 'px' }, 500); 
        //     $('.subject').stop().animate({'top': 0 + 'px' }, 500); 
        //     $('.cross-effect').stop().animate({'top': 0 + 'px' }, 500);
        // }        

        // if ($('header').find('.header-wrap.active').length === 0) {
        //     lastScrollPosition = $(window).height() * lastSectionIndex;
        //     $('html').animate({ scrollTop:  lastScrollPosition}, 0);
        // }
    }

    function setEventToGnb() {
        $('.c-gnb__full-menu-wrap').css('display','none'); 

        $btnMenu.click(function() {
            if ($(this).hasClass('c-gnb__btn-menu--open')) {
                $btnMenu.removeClass('c-gnb__btn-menu--open').addClass('c-gnb__btn-menu--open-click');
                $gnb.removeClass('active').addClass('disable');
                $main.removeClass('prepare').addClass('active');
                $contactPrj.removeClass('black');
                headerHidden(true);
                $sectionTitleArea.show();
                if($footer.hasClass('prepare')) $mainWrap.find('.contact-pjt').css('display', 'none');
            } else {
                //if ($main.find('.main__wrap').length > 0 && $mainWrap.find('.title-area.active').length === 0 ) return false;
                $btnMenu.removeClass('c-gnb__btn-menu--open-click').addClass('c-gnb__btn-menu--open');
                $gnb.addClass('active').removeClass('disable');
                $main.removeClass('active').addClass('prepare');
                $contactPrj.addClass('black');
                headerHidden(false);
                $sectionTitleArea.hide();
                iCanScroll = false;
                $mainWrap.find('.contact-pjt').fadeIn();
            }
        });
    }
    
    function setEventToMain() {
        if($mainWrap.length > 0) {
            $(document).on('mousewheel DOMMouseScroll scroll', 'body', events.moveWheel);
            $('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
                e.preventDefault();
            });
            $.mobileTouch.init('body', true, events.touch);
            $(document).on('keydown', 'body', events.keyMove);
        }

        $(document).on('mouseenter', '.main__wrap .title .linker', events.mouseEnter);
        $(document).on('mouseleave', '.main__wrap .title .linker', events.mouseLeave);
    
        $('.title').on('mouseover', function(){
            $('.dim').addClass('dark');
            $(this).on('mouseleave', function(){
                $('.dim').removeClass('dark');
            });
        });
    }

    function setEventToCloseLayerPopup() {
        $('[data-popup="layerClose"]').on('click',function(){
            $(this).parents('[data-role="layerOpen"]').hide();
            $(this).parents('[data-role="layerOpen"]').removeClass('active');
            
            hideBodyMask();
        });
    }

    function setEventToMask() {
        /* EVENT */
        $(document).on("click", ".body-mask", function() {
            if ($("#bottomSheet").hasClass("active") === true) {
                $("#bottomSheet").removeClass("active");
                hideBodyMask();
            }
      
            // layerpopup dim click event
              if ($('[data-role="layerOpen"]:visible').hasClass("active") === true) {
                $('[data-role="layerOpen"]:visible').removeClass('active');
                $('[data-role="layerOpen"]:visible').css('display','none');          
                hideBodyMask();
            }
      
            // gnb dim click event
            if ($('.guide-section__header').hasClass('active') === true) {
                $('.guide-section__header').removeClass('active');
                $('.guide-section__close').removeClass('active');
                hideBodyMask();
            }
      
        });
    }

    function initSwiper() {
        var swiper = new Swiper('.c-carousel--kv', {
            loop:true,
            touchReleaseOnEdges:true,
            pagination: {
            el: '.c-carousel--kv .c-carousel__pager .c-carousel__pagination',
            clickable: true,
            }
            
        });

        swiper = new Swiper('.c-carousel--card', {
            loop:true,
            touchReleaseOnEdges:true,
            slidesPerView: 'auto',
        });

        swiper = new Swiper('.c-carousel--vertical', {
            direction: 'vertical',
            allowTouchMove : false,
            loop: true,
            autoplay: {
            delay: 3000,
            disableOnInteraction: false
            },
        });

        var swiper_gallery_thumb = new Swiper('.c-carousel__profile-thumb', {
            slidesPerView: 'auto',
            spaceBetween: 6,
            loop:false,
        });

        var swiper_gallery_edit = new Swiper('.c-carousel__profile-edit', {
            spaceBetween: 50,
            slidesPerView: 1,
            loop: true,
            navigation: {
            nextEl: '.c-carousel--gallery .c-carousel__next',
            prevEl: '.c-carousel--gallery .c-carousel__prev'
            },
            thumbs: {
            swiper: swiper_gallery_thumb
            }
        });
    }

    function headerHidden(isHide) {
        if (isHide === true) {
            $('.c-gnb__full-menu-wrap').hide();
            $('.sns').hide();
            $('header .descriptions').hide();
            $('body').css({'overflow-y' : 'auto'});
        }
        else {
            $('.c-gnb__full-menu-wrap').show();
            $('.sns').show();
            $('header .descriptions').show();
            $('body').css({'overflow' : 'hidden'});
        }
    }

    function mainHidden(isHide) {
        if (isHide === true) {
            $mainWrap.find('.title-area').fadeOut();
            $mainWrap.find('.scroll').fadeOut();
            $mainWrap.find('.paging-current').fadeOut();
            $mainWrap.find('.paging-total').fadeOut();
            $mainWrap.find('.contact-pjt').fadeOut();
            $mainWrap.find('.mask').fadeOut();
        }
        else {
            $mainWrap.find('.title-area').fadeIn();
            $mainWrap.find('.scroll').fadeIn();
            $mainWrap.find('.paging-current').fadeIn();
            $mainWrap.find('.paging-total').fadeIn();
            $mainWrap.find('.contact-pjt').fadeIn();
            $mainWrap.find('.mask').fadeIn();
        }
    }

    function loadProjects() {
        var html = '';
        $sections.find('section').remove();

        if(optionFixedWhenPageSlider === true)
        {
            for (var i = 0; i < PIVOT.projects.length; i++) {
                html = '';
                html = '<section id="section_' + (i) + '">';
                html += '<div class="bg"></div>';
                html += '</section>';
                $sections.append(html);
                
                var $section = $('section#section_' + (i));
                $section.find('.bg').css( "background-image", "url(" + ($.browser.mobile === true ? PIVOT.projects[i].bgImgMobile : PIVOT.projects[i].bgImg) + ")");
            }
        }
        else {
            for (var i = PIVOT.projects.length - 1; i >= 0; i--) {
                var temp = '';
                if(i > 0) temp = 'style="display: none"';
                html = '';
                html = '<section id="section_' + (i) + '"' + temp +' >';
                html += '<div class="bg"></div>';
                html += '</section>';
                $sections.append(html);
                
                var $section = $('section#section_' + (i));
                $section.find('.bg').css( "background-image", "url(" + ($.browser.mobile === true ? PIVOT.projects[i].bgImgMobile : PIVOT.projects[i].bgImg) + ")");
            }
        }

        $sectionTitleArea = $('.main__wrap .title-area');
        $sectionTitleArea.find('a').attr('href', PIVOT.projects[0].url);
        $sectionTitleArea.find('h2').text(PIVOT.projects[0].title);
        $sectionDescTitleTxt.text(PIVOT.projects[0].subTitle);
        $sectionDesc.text(PIVOT.projects[0].desc);

        onActiveCurrentSection(0);
        $('body').css({'overflow': 'hidden', 'position':'fixed'});
        if(optionFixedWhenPageSlider === true) {
            $('.main__wrap section').css('top', '100vh');
            $($('.main__wrap section')[0]).css('top', '0vh');
        }
        else {
            $('.main__wrap section').css('position', 'absolute');
            $('.main__wrap section').css('top',  defNextSliderAmount + 'vh'); 
            $($('.main__wrap section')[PIVOT.projects.length-1]).css('top',  0 + 'vh'); 
        }

        afterLoadProjects();
    }

    function afterLoadProjects() {
        var delay = 0,
            prevTime    = +new Date();

        headerHidden(true);
        $sectionTitleArea.hide();
        $main.addClass('loading');

        setTimeout(function () {
            $('body').fadeIn();
            
            setTimeout(function () {
                $main.removeClass('loading').addClass('prepare');

                // init display
                setLastSectionIndex(getLastSectionIndex());
                $menuWrap.css('display', 'block');
                $('.main__wrap section').css('display', 'block');
                if($main.length > 0) $footer.css('display', 'block');

            }, 300);
        }, 0); 

        delay = $main.find('.main__wrap').length > 0 ? 500 : 0;
        setTimeout(function () {
            $main.removeClass('prepare').addClass('active');
            $contactPrj.addClass('active');

            if($.browser.mobile === true) {
                $('.c-gnb__logo').animate({'top' : 24 + 'px'}, 500);
                $('.c-gnb__btn-menu').animate({'top' : 24 + 'px'}, 500);
            } else {
                $('.c-gnb__logo').animate({'top' : 40 + 'px'}, 500);
                $('.c-gnb__btn-menu').animate({'top' : 40 + 'px'}, 500);
            }
            
        }, delay);

        setTimeout(function () {
            $crossEffect.addClass('active');
        }, 1500);

        if($.browser.mobile !== true) {
            setTimeout(function () {
                $paging.animate({'left' : 80 + 'px'}, 500);
                $pagingTotal.animate({'right' : 80 + 'px'}, 500);
                $scrollElm.animate({'bottom' : 20 + 'px'}, 500);
            }, 2050);
        }

        setTimeout(function () {
            $sectionTitleArea.show()
            $sectionTitleArea.addClass('active');
        }, 2500);

        //$(window).resize(throttle(10, function(e) { onResizeWindow(); }));
    }

    function loadPaging() {
        var total = PIVOT.projects.length;
        if (total < 10) total = '0' + total;
        $paging.find('ul').remove();
        $('.paging-total').text(total);
        $paging.append('<ul class="current"></ul>');

        for ( var i = 1; i <= PIVOT.projects.length; i++ ) {
            var zero = '';
            if (i < 10) zero = 0;
            $paging.find('ul').append('<li>' + zero + (i) + '</li>');
        }
        
    }

    function initMain() {
        if ($main.find('.main__wrap').length === 0) {
            var delay = $main.find('.main__wrap').length > 0 ? 500 : 0;
            setTimeout(function () {
                $main.removeClass('prepare').addClass('active');
                $contactPrj.addClass('active');
    
                if($.browser.mobile === true) {
                    $('.c-gnb__logo').animate({'top' : 24 + 'px'}, 500);
                    $('.c-gnb__btn-menu').animate({'top' : 24 + 'px'}, 500);
                } else {
                    $('.c-gnb__logo').animate({'top' : 40 + 'px'}, 500);
                    $('.c-gnb__btn-menu').animate({'top' : 40 + 'px'}, 500);
                }
            }, delay);

            return;
        }

        $('body').hide();
        
        $.getJSON('../../js/project.json', function(json) {
            PIVOT.projects = json['projects'];

            loadProjects();
            loadPaging();
        });
    }

    function getLastSectionIndex() {
        var index = 1;

        index = Math.ceil(window.pageYOffset / window.innerHeight);
        console.log('getLastSectionIndex[' + index + '] : window.pageYOffset = ' + window.pageYOffset + ', window.innerHeight = ' + window.innerHeight);

        return lastSectionIndex = index;
    }

    function setLastSectionIndex(index) {
        var $pagingCurrent = $paging.find('.current');
        if ($pagingCurrent.length === 0) return;
        
        var pagingPosition = ( index > PIVOT.projects.length - 1 ) ?
            pagingPosition = $paging.height() * (PIVOT.projects.length - 1) : pagingPosition = $paging.height() * index;

        $pagingCurrent.css({ 'margin-top' : - pagingPosition + 'px' });
        lastSectionIndex = index;
    }

    function onActiveCurrentSection(index) {
        $('section').removeClass('active');
        $('#section_' + index).addClass('active');
    }

    function onChangeTargetFile() {
        var thisVal = $fileTarget.val();

        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.c-form__input').val(filename);
        if(thisVal == ''){
            $fileTarget.siblings('.c-form__input').addClass('c-form__input--upload');
            $fileTarget.siblings('.c-form__label--file').addClass('c-form__label--upload');      
            $(this).siblings('label').text('수정');
        } 
    }

    function onClickBtnTab() {
        var $target = $('.c-tab__list');
        var $box = $('.c-tab__panel');

        var num = $target.index($(this).closest($target));
        if(!$(this).hasClass('c-tab__btn--active')) {
            $btnTab.removeClass('c-tab__btn--active');
            $(this).addClass('c-tab__btn--active');
            $box.removeClass('c-tab__panel--active');
            $box.eq(num).addClass('c-tab__panel--active');
        }
    }

    function onKeyupInput() {
		var val = $(this).val();
		var $valList = $(this).siblings('.c-form__search-list');
		var $option = $('.c-form__search-list li a');

        //console.log('input check : ' + val + ', ' + isValueType(val, 'SP'));
        /* if (isValueType(val, 'SP') === true ) {
            val = '';
            $inputList.val(val);
        } */

		if (val == '') {
			$valList.hide();
		} else {
			$valList.show();
			$option.click(function() {
				var text = $(this).text();
				$inputList.val(text);
				$valList.hide();
			});
		}
    }

    function setEventToEmail() {
        emailjs.init('wGU-YlvzViX-8vZQo');
        if(document.getElementById('contactForm') != null) document.getElementById('contactForm').addEventListener('submit', function (event) {
            event.preventDefault();
            this.contact_number.value = Math.random() * 100000 | 0;
            emailjs.sendForm('service_eg4qz7i', 'template_p9fbf5v', this)
                .then(function () {
                    alert('문의주셔서 감사합니다. 빠른 시일에 답변 드리겠습니다.');
                }, function (error) {
                    alert('메일 발송에 문제가 생겼습니다. 다시 시도해 주세요.', error);
                });
        });
    }

    function setEventExpandContactUs() {
        if($.browser.mobile === true) {
            $('.footer__anchor').trigger( "click" );
        }

        $('.footer__anchor').on("click", function () {
            $('.c-form--contact').toggleClass('active');
            
            if($.browser.mobile === true) return;
            if ($('.c-form--contact').hasClass('active') == true) {
                $footerBody.addClass('expand');
                $footerHeader.addClass('expand');
                //$footerHeader.css('height', '+=' + (($('.footer__copyright').offset().top - $('html').scrollTop()) - parseFloat($footerHeader.innerHeight())) + 'px')
            } else {
                $footerBody.removeClass('expand');
                $footerHeader.removeClass('expand');
                $footerHeader.attr("style", "");
            }
        })
    }

    function setEventOpenContactUs() {
        $(document).on("click", "#main .contact-title", function () {

            if ($gnb.hasClass('active') === true) $btnMenu.trigger("click");

            $contactPrj.removeClass('active');
            $('#main .contact-title').addClass('active');
            $footer.addClass('active prepare');
            $footerMainBody.addClass('active');
            //mainHidden(true);

            if ($('.c-form__anchor').prop("checked") == true) return;

            setTimeout(function() {
                $('.footer__anchor').trigger("click");
            }, 800);
        })
    }

    function closeContactUs() {
        $footer.removeClass('active prepare');
        $footerMainBody.removeClass('active');
        $contactPrj.addClass('active');
        $('#main .contact-title').removeClass('active');

        if($('.c-form__anchor').prop("checked")==true) {
            $('.footer__anchor').trigger( "click" );
        }
    }
});
/* ready() end */

/* GLOBAL FUNCTION */
function openLayerPopup(elem){
    $('[data-role="layerOpen"].'+ elem).show();
    $('[data-role="layerOpen"]').addClass('active');
    showBodyMask();
}

function showBodyMask() {
    if($(".body-mask").length > 0) return;

    $("#document").append($('<div id="" class="body-mask active"></div>'));
    var bodyHeight = $("#document").outerHeight(true);
    $(".body-mask").height(bodyHeight);
    $('body').addClass('body-scroll-lock');
}

function hideBodyMask() {
    $(".body-mask").remove();
    $('body').removeClass('body-scroll-lock');
}

function getCurrentImageScaleAmount(type, offset) {
    var ret = 0;
    ret = type * ($(window).innerWidth() / 1920) + offset;

    return ret;
}

function checkDevice() {
    if ($.browser.android) $('html').addClass('android');
    if ($.browser.safari) $('html').addClass('ios');
}