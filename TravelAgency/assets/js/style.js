let sectionResultados = {
    width: $('#resultadosSection').width(),
    top: $('#resultadosSection').offset().top,
}

$(window).resize();
var $scrollingDiv = $("#background-resize");
$(window).scroll(function scrolldiv() {
    let pantalla = {
        windowHeight: $(window).height(),
        windowWidth: $(window).width()
    }

    let value = (winScrollTop != 0) ? 450 : 0
        // let sectionScroll = $("#resultados").html($(window).scrollTop());
    var $win = $(window);
    var winScrollTop = $(window).scrollTop() + 0,
        zeroSizeHeight = $(document).height() + 200 - $(window).height(),
        newSize = screen.width * (1 - (winScrollTop / zeroSizeHeight));



    if (winScrollTop < sectionResultados.width && winScrollTop < sectionResultados.top) {

        $scrollingDiv.css({
            width: newSize,

        }, 500, 'easeInOutSine');

    }



});