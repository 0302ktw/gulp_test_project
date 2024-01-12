$(function() {
    /* INITIALIZE */
    
    /* FUNCTION */
    var initialize = function () {
        //console.log(document.title + ' initialize start...');

        /* EVENT */
        {
            window.addEventListener('resize', resizeWindow);
        };
    },
    resizeWindow = function() {
        
    };

    // Document Load
    window.addEventListener('load', initialize()) ;

});