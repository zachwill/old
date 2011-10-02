(function(window, $) {

    // Lightbulb becomes yellow on scroll.
    $(window).scroll(function(e) {
        var light = $('.idea_light'),
            visibility = light.css('visibility');

        if (visibility == 'hidden') {
            light.css('visibility', 'visible');
        }
    });


    // Create slider.
    $('.slides').slides({
        height: 190,
        navigation: false,
        next: 'next',
        pagination: false,
        prev: 'prev',
        slide: {
            interval: 400,
            browserWindow: false,
            easing: ""
        },
        width: 305
    });


    // Create custom slider controls.
    var controls = [$('.prev'), $('.next')];

    $.each(controls, function(index, value) {
        value.click(function(e) {
            var direction = value.html().toLowerCase(),
                slides = $('.slides');

            e.preventDefault();

            if (direction == 'next') {
                slides.slides('next');
            } else {
                slides.slides('previous');
            }
        });
    });


})(window, jQuery);
