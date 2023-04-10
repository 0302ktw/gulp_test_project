$(function() {
    /* INITIALIZE */
    var ajaxTestPage = 0,
        footerOffset = '',
        windowHeight = '';

    var $grid = $('.grid').masonry({
        // options 
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter : 15,
        percentPosition : true,
    });
    $grid.imagesLoaded().progress(function() {
        $grid.masonry('layout');
    });

    var initialize = function() {
        console.log(document.title + ' initialize start...');

        ajaxTestPage = 0;
        
        /* EVENT */
        {
            window.addEventListener('resize', resizeWindow);
            window.addEventListener('scroll', function() {
                if($(window).scrollTop() + $(window).height() >= $(document).height()) {
                    ajaxTestPage++
                    loadMasonryData(ajaxTestPage);
                }
            });
        };

    },
    resizeWindow = function() {

    };

    function loadMasonryData(ajaxTestPage) {
        $.ajax({
            url : '../../js/ajax/masonry.json',
            method : 'GET',
            dataType : 'json',
            success : function(data) {
                var start = (ajaxTestPage - 1) * 10;
                var end = start + 10;

                var items = data.slice(start, end);
                
                console.log(items);

                var html = '';

                if(items.length > 0) {
                    $.each(items, function(index, item) {
                        html += '<div class="grid-item load-ele">' + item.title + '</div>'; // 데이터를 반복문으로 처리하면서 HTML 문자열을 생성
                    });

                    var $newItems = $(html); // Masonry.js 라이브러리의 특성으로 제이쿼리 객체로 한번 감싸줘야함
                    $grid.append($newItems).masonry('appended', $newItems); // Masonry 레이아웃에 HTML 문자열을 추가하고 레이아웃을 갱신
                    $grid.imagesLoaded().progress(function() {
                        $grid.masonry('layout');
                    });

                } else {
                    alert('더 이상 로드할 데이터가 없습니다.');
                }
            },
            error : function(request, status, error) {
                console.log(error);
            }
        });
    }

    // Document Load
    window.addEventListener('load', initialize());

});