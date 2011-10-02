(function(window, $) {

    $(window).scroll(function(e) {
        var light = $('.idea_light'),
            visibility = light.css('visibility');

        if (visibility == 'hidden') {
            light.css('visibility', 'visible');
        }
    });


})(window, jQuery);
