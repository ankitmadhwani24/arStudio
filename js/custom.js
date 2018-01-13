$(document).ready(function () {
    $('.carousel').carousel();
    var windowHeight = $(window).height();
    $('.silder').height(windowHeight);
    $(window).resize(function() {
        var windowHeight = $(window).height();
        $('.silder').height(windowHeight);
    });

    
});
