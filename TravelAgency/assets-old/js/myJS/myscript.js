/*===================================================================*/
// Funcion para hacer el scroll mas lento 
function scrollDelay(ms) {
    return new Promise(res => setTimeout(res, ms));
}

document.getElementById("buscar").onclick = async function() {
    buscarHoteles("buscar");
    selectHabitacion("huespedes");
    document.getElementById("busqueda").hidden = false;
    document.getElementById("footer-div").hidden = false;
    enableScroll();
    var x = (document.body.scrollHeight);
    for (var y = 0; y <= x; y += 100) {
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        })
        await scrollDelay(100)
    }
}

document.getElementById("huespedesFiltros").onchange = function() {
    selectHabitacion("huespedesFiltros");
}

document.getElementById("aplicarfiltros").onclick = function() {
    getList();
    buscarHoteles("aplicarfiltros");

}

/*===================================================================*/
//  Funcion para que al recargar la pagina se vaya al inicio de la pagina
$(document).ready(function() {
    $(this).scrollTop(0);
});

/*===================================================================*/
// Funcion para hacer el resize del div azul
$(window).resize(function() {
    $('#container').css({
        top: ($(window).height() - $('#container').outerHeight()) / 2
    });
});

// Para comenzar con el resize
$(window).resize();
var $scrollingDiv = $("#container");
$(window).scroll(function scrolldiv() {
    var winScrollTop = $(window).scrollTop() + 0,
        zeroSizeHeight = $(document).height() + 200 - $(window).height(),
        newSize = 768 * (1 - (winScrollTop / zeroSizeHeight));

    if (winScrollTop < 610) {


        $scrollingDiv.css({
            width: newSize,
            "marginTop": winScrollTop + "px"
        }, 600, 'easeInOutSine');

    }
});

/*===================================================================*/
function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}
/*===================================================================*/
//Funciones para buscar resultados
function buscarHoteles(input) {
    var ciudad;
    var checkIn;
    var checkOut;
    var huespedes;
    var tipoHabitacion;
    if (input == "buscar") {
        ciudad = $("#ciudad").val();
        checkIn = $("#checkIn").val();
        checkOut = $("#checkOut").val();
        huespedes = $("#huespedes").val();

        document.getElementById("ciudadFiltros").value = ciudad;
        document.getElementById("checkInFiltros").value = checkIn;
        document.getElementById("checkOutFiltros").value = checkOut;
        document.getElementById("huespedesFiltros").value = huespedes;
        console.log(ciudad + " " + checkIn + " " + checkOut + " " + huespedes);
    } else if (input == "aplicarfiltros") {
        ciudad = $("#ciudadFiltros").val();
        checkIn = $("#checkInFiltros").val();
        checkOut = $("#checkOutFiltros").val();
        huespedes = $("#huespedesFiltros").val();
        tipoHabitacion = $("#tipoHabitacion").val();
        console.log(ciudad + " " + checkIn + " " + checkOut + " " + huespedes + " " + tipoHabitacion);
    }

    // Poner valores en los otros input


    /*$.post("submit.php", { name: name, email: email, phone: phone, gender: gender },
        function(data) {
            $('#results').html(data);
            $('#myForm')[0].reset();
        });*/
}
// CheckIn
const checkIn = document.getElementById('checkIn');
checkIn.addEventListener('change', cambiarCheckOut);

function cambiarCheckOut() {
    var checkout = document.getElementById("checkOut").value;
    if (checkIn.value > checkout) {
        var date = new Date(checkIn.value);
        date.setDate(date.getDate() + 1);
        document.getElementById("checkOut").valueAsDate = date;
    }
}


const checkOut = document.getElementById('checkOut');
checkOut.addEventListener('change', cambiarCheckIn);

function cambiarCheckIn() {
    var checkin = document.getElementById("checkIn").value;
    if (checkOut.value < checkin) {
        var date = new Date(checkOut.value);
        date.setDate(date.getDate() - 1);
        document.getElementById("checkIn").valueAsDate = date;
    }
}

const checkInFiltros = document.getElementById('checkInFiltros');
checkInFiltros.addEventListener('change', cambiarCheckOutFiltros);

function cambiarCheckOutFiltros() {
    var checkout = document.getElementById("checkOutFiltros").value;
    if (checkInFiltros.value > checkout) {
        var date = new Date(checkInFiltros.value);
        date.setDate(date.getDate() + 1);
        document.getElementById("checkOutFiltros").valueAsDate = date;
    }
}


const checkOutFiltros = document.getElementById('checkOutFiltros');
checkOutFiltros.addEventListener('change', cambiarCheckInFiltros);

function cambiarCheckInFiltros() {
    var checkin = document.getElementById("checkInFiltros").value;
    if (checkOutFiltros.value < checkin) {
        var date = new Date(checkOutFiltros.value);
        date.setDate(date.getDate() - 1);
        document.getElementById("checkInFiltros").valueAsDate = date;
    }
}

function selectHabitacion(input) {
    var num = 0;
    if (input == "huespedes") {
        num = document.getElementById("huespedes").value;
    } else if (input == "huespedesFiltros") {
        num = document.getElementById("huespedesFiltros").value;
    }
    document.getElementById("tipoHabitacion").options[0].disabled = false;
    document.getElementById("tipoHabitacion").options[1].disabled = false;
    document.getElementById("tipoHabitacion").options[2].disabled = false;
    document.getElementById("tipoHabitacion").options[3].disabled = false;
    document.getElementById("tipoHabitacion").options[4].disabled = false;

    if (num <= 2) { // Sencilla - 4
        document.getElementById("tipoHabitacion").options[0].selected = true;
    } else if (num > 2 && num <= 4) { // Doble - 4
        document.getElementById("tipoHabitacion").options[0].disabled = true;
        document.getElementById("tipoHabitacion").options[1].disabled = true;

        document.getElementById("tipoHabitacion").options[2].selected = true;
    } else if (num > 4 && num <= 6) { // Junior - 6
        document.getElementById("tipoHabitacion").options[0].disabled = true;
        document.getElementById("tipoHabitacion").options[1].disabled = true;
        document.getElementById("tipoHabitacion").options[2].disabled = true;

        document.getElementById("tipoHabitacion").options[3].selected = true;
    } else if (num > 6) { // Suite - 8
        document.getElementById("tipoHabitacion").options[0].disabled = true;
        document.getElementById("tipoHabitacion").options[1].disabled = true;
        document.getElementById("tipoHabitacion").options[2].disabled = true;
        document.getElementById("tipoHabitacion").options[3].disabled = true;

        document.getElementById("tipoHabitacion").options[4].selected = true;
    }
}

$(document).ready(function() {
    $(window).keydown(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});