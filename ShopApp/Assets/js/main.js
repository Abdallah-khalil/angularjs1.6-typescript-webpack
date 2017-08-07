jQuery(document).ready(function () {


    /*preloder*/
    $(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(800); // will first fade out the loading animation
        $('#loader-wrapper').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(100).css({ 'overflow-x': 'hidden' });
        // Show Overflow of Body when Everything has Loaded
        $("body").css("overflow", "visible");
        var nice = $('html').niceScroll({
            cursorborder: "5",
            cursorcolor: "#00AFF0",
            cursorwidth: "3px",
            boxzoom: true,
            autohidemode: true
        });


    })



});

