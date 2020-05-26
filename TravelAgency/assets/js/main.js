$(document).ready(function() {


    $('#checkIn').datepicker({
        language: "es",
        todayBtn: "linked",
        format: "dd/mm/yyyy",
        multidate: false,
        todayHighlight: true,
        startDate: new Date(),
    });

    $('#checkOut').datepicker({
        language: "es",
        format: "dd/mm/yyyy",
        multidate: false,
        todayHighlight: true,
        startDate: new Date(),
    });
    $('#checkIn').datepicker('setDate', new Date());
    $('#checkOut').datepicker('setDate', new Date((new Date()).valueOf() + 1000 * 3600 * 24));

});
$(window).on("scroll", function() {
    if ($(this).scrollTop() >= $("#resultados").offset().top - $(this).height()) {
        $("body").removeClass("stop-scrolling");
    }
});


let buscarHotel = async() => {

    let buscarSection = document.getElementById('resultados');
    let x = buscarSection.scrollHeight;

    $('html, body').animate({

        scrollTop: $("#resultados").offset().top

    }, 2000);







}