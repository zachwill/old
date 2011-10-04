(function(window, $) {

    // Scroll to the bottom of the page when the lightbulb is clicked.
    var idea = $('.idea');

    idea.click(function(e) {
      var height = $(document).height();

      e.preventDefault();

      $('html, body').animate({
        scrollTop: height
      }, 600);
    });


    // Create slider.
    var slides = $('.slides');

    slides.slides({
        height: 190,
        navigation: false,
        next: 'next',
        pagination: false,
        preload: true,
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
