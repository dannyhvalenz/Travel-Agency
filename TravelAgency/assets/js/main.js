$(document).ready(function() {
    $('#userAccount').hide();
    $('#footer').hide();


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
    $('#checkIn0').datepicker({
        language: "es",
        todayBtn: "linked",
        format: "dd/mm/yyyy",
        multidate: false,
        todayHighlight: true,
        startDate: new Date(),
    });

    $('#checkOut0').datepicker({
        language: "es",
        format: "dd/mm/yyyy",
        multidate: false,
        todayHighlight: true,
        startDate: new Date(),
    });

    $('#datepicker').datepicker({
        language: "es",
        format: "dd/mm/yyyy",
        multidate: false,
        todayHighlight: true,
        startDate: new Date(),
    });

    $('#checkIn').datepicker('setDate', new Date());
    $('#checkOut').datepicker('setDate', new Date((new Date()).valueOf() + 1000 * 3600 * 24));
    $('#checkIn0').datepicker('setDate', new Date());
    $('#checkOut0').datepicker('setDate', new Date((new Date()).valueOf() + 1000 * 3600 * 24));
    verificar();

});
$(window).on("scroll", function() {
    var url = $(this).attr('title');
    if (url == 'Travel Agency | Hoteles') {
        if ($(this).scrollTop() >= $("#resultados").offset().top - $(this).height()) {
            $("body").removeClass("stop-scrolling");
        }
    }

});

let buscarHotel = async() => {

    let buscarSection = document.getElementById('resultados');
    let x = buscarSection.scrollHeight;
    $('#resultadosSection').show(1000);
    $('#footer').show(1000);

    $('html, body').animate({

        scrollTop: $("#resultados").offset().top

    }, 2000);




}

function verificar() {
    axios.post(URL_SERVICE + '/verificar', null, {
            headers: {
                'Authorization': window.localStorage.getItem('token'),
            }
        })
        .then((response) => {
            $('#registerButton').hide();
            $('#iniciarSesionButton').hide();
            $('#userAccount').show(100);
            var nombre = response.data.nombre.split(' ');
            $('#userName').prepend(nombre[0]);
        })
        .catch((error) => {
            $('#accountBtn').hide();
            window.localStorage.removeItem('token');
        });
}