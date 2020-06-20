let precio;
function consultarHotelesInicio(){
    
    var ciudad = document.getElementById("ciudadInicio").value;
    var checkIn = document.getElementById("checkIn").value;
    var checkOut = document.getElementById("checkOut").value;
    var huespedes = document.getElementById("huespedes").value;
    document.getElementById("checkIn0").value = checkIn;
    document.getElementById("checkOut0").value = checkOut;
    document.getElementById("huespedes0").value = huespedes;

    if (ciudad == "CDMX"){
        document.getElementById("ciudad").selectedIndex = 0;
        actualizarSelectTipoHabitacion(ciudad);
    } else if (ciudad == "NYC" ){
        document.getElementById("ciudad").selectedIndex = 1;
        actualizarSelectTipoHabitacion(ciudad);
        recuperarHotelNYC();
    }
    scroll();
}

function actualizarSelectTipoHabitacion(ciudad){
    if (ciudad == "CDMX"){
        var tipoHabitacion = document.getElementById("tipoHabitacion");
        tipoHabitacion.textContent = '';

        var sencilla =  document.createElement('option');
        sencilla.value = "Sencilla";
        sencilla.innerHTML = "Sencilla";
        tipoHabitacion.appendChild(sencilla);

        var doble =  document.createElement('option');
        doble.value = "Doble";
        doble.innerHTML = "Doble";
        tipoHabitacion.appendChild(doble);

        var suite =  document.createElement('option');
        suite.value = "Suite";
        suite.innerHTML = "Suite";
        tipoHabitacion.appendChild(suite);
    } else if (ciudad == "NYC" ){
        var tipoHabitacion = document.getElementById("tipoHabitacion");
        tipoHabitacion.textContent = '';

        var sencilla =  document.createElement('option');
        sencilla.value = "Sencilla";
        sencilla.innerHTML = "Sencilla";
        tipoHabitacion.appendChild(sencilla);

        var doble =  document.createElement('option');
        doble.value = "Doble";
        doble.innerHTML = "Doble";
        tipoHabitacion.appendChild(doble);
        
        var junior =  document.createElement('option');
        junior.value = "Junior";
        junior.innerHTML = "Junior";
        tipoHabitacion.appendChild(junior);

        var suite =  document.createElement('option');
        suite.value = "Suite";
        suite.selected = true;
        suite.innerHTML = "Suite";
        tipoHabitacion.appendChild(suite);
    }
}

function scroll(){
    let buscarSection = document.getElementById('resultados');
    let x = buscarSection.scrollHeight;
    $('#resultadosSection').show(1000);
    $('#footer').show(1000);

    $('html, body').animate({

        scrollTop: $("#resultados").offset().top

    }, 2000);
}

function recuperarHotelNYC(){
    new Vue({
        el:"#tablaResultados",
        created: function(){
            this.recuperarHabitaciones();
        },
        data:{
            habitaciones : []
        },
        methods:{
            recuperarHabitaciones:function(){
                
                this.$http.get(URL_HOTEL_NYC + 'tipos/habitaciones')
                    .then(function(respuesta){
                        document.getElementById("tablaResultados").innerHTML = "";
                        var sencilla = respuesta.data.Sencilla;
                        var doble = respuesta.data.Doble;
                        var junior = respuesta.data.Junior;
                        var suite = respuesta.data.Suite;
                        if(sencilla > 0){
                            crearTarjetaHabitacion("Sencilla", sencilla);
                        }
                        if (doble > 0){
                            crearTarjetaHabitacion("Doble", doble);
                        }
                        if (junior > 0){
                            crearTarjetaHabitacion("Junior", junior);
                        }
                        if (suite > 0){
                            crearTarjetaHabitacion("Suite", suite);
                        }
                    }).catch((error) =>{
                        console.log(error);
                    })
            }
        }
    });
}

function crearTarjetaHabitacion(tipoHabitacion, numDisponibles){
    var res = document.getElementById("tablaResultados");
    //Version horizontal
    var card =  document.createElement('div');
    card.className = "card mb-4";
    card.style.maxWidth = "100%";
    res.appendChild(card);
    card.id = tipoHabitacion;
    var div1 =  document.createElement('div');
    div1.className = "row no-gutters";
    card.appendChild(div1);
    var div2 =  document.createElement('div');
    div2.className = "col-sm-5";
    div2.style.background = "#868e96";
    div1.appendChild(div2);
    var img =  document.createElement('img');
    img.className = "card-img-top h-100";
    div2.appendChild(img);
    var div3 =  document.createElement('div');
    div3.className = "col-sm-7";
    div1.appendChild(div3);
    var cardBody=  document.createElement('div');
    cardBody.className = "card-body";
    div3.appendChild(cardBody);
    var h5=  document.createElement('h5');
    h5.className = "card-title";
    cardBody.appendChild(h5);
    var p=  document.createElement('p');
    p.className = "card-text";
    cardBody.appendChild(p);
    var btnReservar =  document.createElement('button');
    btnReservar.className = "btn btn-primary btnReservar";
    btnReservar.innerText = "Reservar";
    btnReservar.name= tipoHabitacion;
    btnReservar.setAttribute("data-toggle","modal");
    btnReservar.setAttribute("data-target", "#modalReservacion");
    //btnReservar.addEventListener("click", cargarTicket(this.name));
    btnReservar.onclick = function(){cargarTicket(this.name)};
    cardBody.appendChild(btnReservar);
    obtenerPrecio2(tipoHabitacion);

    /* //Version vertical
    res.className = "card-deck";
    var card =  document.createElement('div');
    card.className = "card mb-4";
    card.style.maxHeight = "300px";
    res.appendChild(card);
    card.id = tipoHabitacion;
    var div1 =  document.createElement('div');
    div1.className = "view overlay";
    card.appendChild(div1);
    var img =  document.createElement('img');
    img.className = "card-img-left";
    div1.appendChild(img);
    var div2 =  document.createElement('div');
    div2.className = "card-body";
    card.appendChild(div2);
    var h5 =  document.createElement('h5');
    h5.className = "card-title";
    div2.appendChild(h5);
    var p =  document.createElement('p');
    p.className = "card-text";
    div2.appendChild(p);
    var btnReservar =  document.createElement('button');
    btnReservar.className = "btn btn-primary";
    btnReservar.innerText = "Reservar";
    btnReservar.setAttribute("data-toggle","modal");
    btnReservar.setAttribute("data-target", "#modalReservacion");
    btnReservar.addEventListener("click", cargarTicket(tipoHabitacion));
    div2.appendChild(btnReservar);
    */
    switch(tipoHabitacion){
        case "Sencilla":
            img.src = "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-156,2282-3000,0000-1687,4999/publish/content/dam/fourseasons/images/web/NYF/NYF_1357_original.jpg";
            //img.src = "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg";
            h5.innerText = "Habitación Sencilla";
            p.innerText = "1 Cama King Size \n 2 Personas máximo \n Costo por noche: $900\nPrecio:$"+ precio +"\nDisponibles: " + numDisponibles;
            break;
        case "Doble":
            img.src = "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-265,1912-3000,0000-1687,4999/publish/content/dam/fourseasons/images/web/NYF/NYF_1389_original.jpg";
            //img.src = "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg";
            h5.innerText = "Habitación Doble";
            p.innerText = "2 Cama King Size \n 4 Personas máximo\n Costo por noche: $1400\n Precio:$"+ precio +"\nDisponibles: " + numDisponibles;
            break;
        case "Junior":
            //img.src = "/TravelAgency/assets/img/hotel-nyc/junior.jpg";
            img.src = "https://www.fourseasons.com/content/dam/fourseasons/images/web/NYF/NYF_1376_aspect16x9.jpg/jcr:content/renditions/cq5dam.web.468.263.jpeg";
            h5.innerText = "Habitación Junior";
            p.innerText = "3 Cama King Size \n 6 Personas máximo \n Costo por noche: $1900\n Precio:$"+ precio +"\nDisponibles: " + numDisponibles;
            break;
        case "Suite":
            img.src = "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-505,4763-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/NYF/NYF_125_original.jpg";
            h5.innerText = "Habitación Suite";
            p.innerText = "4 Cama King Size \n 8 Personas máximo\n Costo por noche: $2400\n Precio:$"+ precio +"\nDisponibles: " + numDisponibles;
            break;
    }
    
}

function reservar(){
    var ciudad = document.getElementById("ciudadReservacion").value;
    // FIXME checar si esta loggeado el cliente
    if (ciudad == "CDMX"){

    } else if (ciudad == "NYC"){

        // FIXME verificar si existe el cliente en la base de datos del hotel
        // Si existe recuperar el id
        // Si no existe crear el cliente y recuperar el id de la base de datos del hotel
        var llegada = $("#fechaLlegadaReservacion").val();
        var fechaLlegada = llegada.split("/").reverse().join('-');
        var salida = $("#fechaSalidaReservacion").val();
        var fechaSalida = salida.split("/").reverse().join('-');
        var reservacion = {
            idCliente: 1,
            tipoHabitacion: $('#tipoHabitacionTicket').text(),
            fechaLlegada: fechaLlegada,
            fechaSalida: fechaSalida,
            numPersonas: parseInt($('#huespedesTicket').text(), 10),
            precio: parseInt($('#precioTicket').text(), 10),
            status: 'vigente',
        }
        console.log(reservacion);
        console.log(JSON.stringify(reservacion));
        
        axios.post(URL_HOTEL_NYC + 'reservacion', reservacion
        ).then((response) => {
            var data = response.data;
            console.log(data);
            console.log(response.data);
    
        }).catch((error) => {
            console.log(error);
        });
    }
}

function cargarTicket(tipoH){
    var ciudad = document.getElementById("ciudad").value;
    document.getElementById("ciudadReservacion").value = ciudad;

    var checkin = document.getElementById("checkIn0").value;
    document.getElementById("fechaLlegadaReservacion").value = checkin;
    document.getElementById("checkInTicket").innerText = checkin;
    
    var checkout = document.getElementById("checkOut0").value;
    document.getElementById("fechaSalidaReservacion").value = checkout;
    document.getElementById("checkOutTicket").innerText = checkout;
    
    document.getElementById("tipoHabitacionReservacion").value = tipoH;
    document.getElementById("tipoHabitacionTicket").innerText = "";
    document.getElementById("tipoHabitacionTicket").innerText = tipoH;
    
    var huespedes = document.getElementById("huespedes0").value;
    document.getElementById("huespedesReservacion").value = huespedes;
    document.getElementById("huespedesTicket").innerText = "";
    document.getElementById("huespedesTicket").innerText = huespedes;
    
    //FIXME obtener precio correcto al tener fechas diferentes (solo da precio por default)
    obtenerPrecio();
}

function actualizarDatos(){
    var checkin = document.getElementById("fechaLlegadaReservacion").value;
    document.getElementById("checkInTicket").innerText = checkin;
    
    var checkout = document.getElementById("fechaSalidaReservacion").value;
    document.getElementById("checkOutTicket").innerText = checkout;
    
    var tipo = document.getElementById("tipoHabitacionReservacion").value;
    document.getElementById("tipoHabitacionTicket").innerText = tipo;
    
    var huespedes = document.getElementById("huespedes0").value;
    document.getElementById("huespedesReservacion").value = huespedes;
    document.getElementById("huespedesTicket").innerText = "";
    document.getElementById("huespedesTicket").innerText = huespedes;
    
    obtenerPrecio();
}

function obtenerPrecio2(tipo){
    var llegada = $("#checkIn0").val();
    var fechaLlegada = llegada.split("/");
    var salida = $("#checkOut0").val();
    var fechaSalida = salida.split("/");

    llegada = new Date(fechaLlegada[2],fechaLlegada[1], fechaLlegada[0]);
    salida = new Date(fechaSalida[2], fechaSalida[1],fechaSalida[0]);
    
    var diferenciaTiempo = Math.abs(salida.getTime() - llegada.getTime());
    let milisegundosEnDia = (1000 * 3600 * 24);

    let diferenciaDias = Math.ceil(diferenciaTiempo / milisegundosEnDia);

    switch(tipo){
        case "Sencilla":
            if (diferenciaDias <= 1){
                precio = 900;
            } else {
                precio = 900 * diferenciaDias;
            }
            break;
        case "Doble":
            if (diferenciaDias <= 1){
                precio = 1400;
            } else {
                precio = 1400 * diferenciaDias;
            }
            break;
        case "Junior":
            if (diferenciaDias <= 1){
                precio = 1900;
            } else {
                precio = 1900 * diferenciaDias;
            }
            break;
        case "Suite":
            if (diferenciaDias <= 1){
                precio = 2400;
            } else {
                precio = 2400 * diferenciaDias;
            }
            break;
    }
}

function obtenerPrecio(){

    var tipo = document.getElementById("tipoHabitacionReservacion").value;
    var llegada = $("#fechaLlegadaReservacion").val();
    var fechaLlegada = llegada.split("/");
    var salida = $("#fechaSalidaReservacion").val();
    var fechaSalida = salida.split("/");

    llegada = new Date(fechaLlegada[2],fechaLlegada[1], fechaLlegada[0]);
    salida = new Date(fechaSalida[2], fechaSalida[1],fechaSalida[0]);

    var diferenciaTiempo = Math.abs(salida.getTime() - llegada.getTime());
    let milisegundosEnDia = (1000 * 3600 * 24);

    let diferenciaDias = Math.ceil(diferenciaTiempo / milisegundosEnDia);
    
    console.log("llegada = "+ llegada);
    console.log("salida = "+ salida);
    console.log("diferenciaDias = "+ diferenciaDias);

    //FIXME Problema con diferencia de fechas
    //let diferenciaDias = Math.floor((salida.getTime() - llegada.getTime()) / 86400000);
    let total = 0;
    console.log("precio = " + document.getElementById("precioTicket").innerText);
    document.getElementById("precioTicket").innerText = "";
    console.log("precio = " + document.getElementById("precioTicket").innerText);
    switch(tipo){
        case "Sencilla":
            if (diferenciaDias <= 1){
                console.log("aqui");
                document.getElementById("precioTicket").innerText = 900;
            } else {
                total = 900 * diferenciaDias;
                console.log("diferenciaDias = " + diferenciaDias);
                document.getElementById("precioTicket").innerText = total;
            }
            break;
        case "Doble":
            if (diferenciaDias <= 1){
                document.getElementById("precioTicket").innerText = 1400;
            } else {
                total = 1400 * diferenciaDias;
                document.getElementById("precioTicket").innerText = total;
            }
            break;
        case "Junior":
            if (diferenciaDias <= 1){
                document.getElementById("precioTicket").innerText = 1900;
            } else {
                total = 1900 * diferenciaDias;
                document.getElementById("precioTicket").innerText = total;
            }
            break;
        case "Suite":
            if (diferenciaDias <= 1){
                document.getElementById("precioTicket").innerText = 2400;
            } else {
                total = 2400 * diferenciaDias;
                document.getElementById("precioTicket").innerText = total;
            }
            break;
    }
    console.log("precio = " + document.getElementById("precioTicket").innerText);
    //actualizarNumPersonas(tipo);
}

function actualizarHabitacionPersonas(numHuespedes, lugar){ //luegar es a que parte de la pagina se refiere
    if (numHuespedes <=2){

    }
}

function aplicarFiltros(){
    var ciudad = document.getElementById("ciudad").value;

    if (ciudad == "CDMX"){
        actualizarSelectTipoHabitacion(ciudad);
    } else if (ciudad == "NYC" ){
        actualizarSelectTipoHabitacion(ciudad);
        recuperarHotelNYC();
    }
}

// FIXME checar que la fecha checkin no sea mayor a la fecha check out