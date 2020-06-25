let precio;
let cliente;
var hotelL = "";

function consultarHotelesInicio() {

    var ciudad = document.getElementById("ciudadInicio").value;
    var checkIn = document.getElementById("checkIn").value;
    var checkOut = document.getElementById("checkOut").value;
    var huespedes = document.getElementById("huespedes").value;
    document.getElementById("checkIn0").value = checkIn;
    document.getElementById("checkOut0").value = checkOut;
    document.getElementById("huespedes0").value = huespedes;

    if (ciudad == "CDMX") {
        document.getElementById("ciudad").selectedIndex = 0;
        actualizarSelectTipoHabitacion(ciudad);
        recuperarHotelMEX(null);
    } else if (ciudad == "NYC") {
        document.getElementById("ciudad").selectedIndex = 1;
        actualizarSelectTipoHabitacion(ciudad);
        recuperarHotelNYC(null);
    }
    scroll();
}

function actualizarSelectTipoHabitacion(ciudad) {
    if (ciudad == "CDMX") {
        var tipoHabitacion = document.getElementById("tipoHabitacion");
        tipoHabitacion.textContent = '';

        var todas = document.createElement('option');
        todas.value = "Todas";
        todas.innerHTML = "Todas";
        tipoHabitacion.appendChild(todas);

        var sencilla = document.createElement('option');
        sencilla.value = "Sencilla";
        sencilla.innerHTML = "Sencilla";
        tipoHabitacion.appendChild(sencilla);

        var doble = document.createElement('option');
        doble.value = "Doble";
        doble.innerHTML = "Doble";
        tipoHabitacion.appendChild(doble);

        var suite = document.createElement('option');
        suite.value = "Suite";
        suite.innerHTML = "Suite";
        tipoHabitacion.appendChild(suite);
    } else if (ciudad == "NYC") {
        var tipoHabitacion = document.getElementById("tipoHabitacion");
        tipoHabitacion.textContent = '';

        var todas = document.createElement('option');
        todas.value = "Todas";
        todas.innerHTML = "Todas";
        tipoHabitacion.appendChild(todas);

        var sencilla = document.createElement('option');
        sencilla.value = "Sencilla";
        sencilla.innerHTML = "Sencilla";
        tipoHabitacion.appendChild(sencilla);

        var doble = document.createElement('option');
        doble.value = "Doble";
        doble.innerHTML = "Doble";
        tipoHabitacion.appendChild(doble);

        var junior = document.createElement('option');
        junior.value = "Junior";
        junior.innerHTML = "Junior";
        tipoHabitacion.appendChild(junior);

        var suite = document.createElement('option');
        suite.value = "Suite";
        suite.innerHTML = "Suite";
        tipoHabitacion.appendChild(suite);
    }
}

function scroll() {
    let buscarSection = document.getElementById('resultados');
    let x = buscarSection.scrollHeight;
    $('#resultadosSection').show(1000);
    $('#footer').show(1000);

    $('html, body').animate({

        scrollTop: $("#resultados").offset().top

    }, 2000);
}

function recuperarHotelNYC(tipoHabitacion) {
    this.hotelL = "NYC";
    new Vue({
        el: "#tablaResultados",
        created: function() {
            this.recuperarHabitaciones();
        },
        data: {
            habitaciones: []
        },
        methods: {
            recuperarHabitaciones: function() {

                this.$http.get(URL_HOTEL_NYC + 'tipos/habitaciones')
                    .then(function(respuesta) {
                        document.getElementById("tablaResultados").innerHTML = "";
                        var sencilla = respuesta.data.Sencilla;
                        var doble = respuesta.data.Doble;
                        var junior = respuesta.data.Junior;
                        var suite = respuesta.data.Suite;

                        if (tipoHabitacion == null) {
                            if (sencilla > 0) {
                                crearTarjetaHabitacion("Sencilla", sencilla);
                            }
                            if (doble > 0) {
                                crearTarjetaHabitacion("Doble", doble);
                            }
                            if (junior > 0) {
                                crearTarjetaHabitacion("Junior", junior);
                            }
                            if (suite > 0) {
                                crearTarjetaHabitacion("Suite", suite);
                            }
                        } else if (tipoHabitacion == "Todas") {
                            var numHuespedes = document.getElementById("huespedes0").value;
                            if (numHuespedes <= 2) {
                                if (sencilla > 0) {
                                    crearTarjetaHabitacion("Sencilla", sencilla);
                                }
                                if (doble > 0) {
                                    crearTarjetaHabitacion("Doble", doble);
                                }
                                if (junior > 0) {
                                    crearTarjetaHabitacion("Junior", junior);
                                }
                                if (suite > 0) {
                                    crearTarjetaHabitacion("Suite", suite);
                                }
                            } else if (numHuespedes <= 4) {
                                if (doble > 0) {
                                    crearTarjetaHabitacion("Doble", doble);
                                }
                                if (junior > 0) {
                                    crearTarjetaHabitacion("Junior", junior);
                                }
                                if (suite > 0) {
                                    crearTarjetaHabitacion("Suite", suite);
                                }
                            } else if (numHuespedes <= 6) {
                                if (junior > 0) {
                                    crearTarjetaHabitacion("Junior", junior);
                                }
                                if (suite > 0) {
                                    crearTarjetaHabitacion("Suite", suite);
                                }
                            } else if (numHuespedes <= 8) {
                                if (suite > 0) {
                                    crearTarjetaHabitacion("Suite", suite);
                                }
                            }
                        } else {

                            if (tipoHabitacion == "Sencilla" && sencilla > 0) {
                                crearTarjetaHabitacion2("Sencilla", sencilla);
                            }
                            if (tipoHabitacion == "Doble" && doble > 0) {
                                crearTarjetaHabitacion2("Doble", doble);
                            }
                            if (tipoHabitacion == "Junior" && junior > 0) {
                                crearTarjetaHabitacion2("Junior", junior);
                            }
                            if (tipoHabitacion == "Suite" && suite > 0) {
                                crearTarjetaHabitacion2("Suite", suite);
                            }
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
            }
        }
    });
}

function recuperarHotelMEX(tipoHabitacion) {
    this.hotelL = "MEX";
    new Vue({
        el: "#tablaResultados",
        created: function() {
            this.recuperarHabitacionesMex();
        },
        data: {
            habitaciones: []
        },
        methods: {
            recuperarHabitacionesMex: function() {

                this.$http.get(URL_HOTEL_MX)
                    .then(function(respuesta) {
                        document.getElementById("tablaResultados").innerHTML = "";
                        var sencilla = "4";
                        var doble = "4";
                        var junior = "2";
                        var suite = "2";

                        if (tipoHabitacion == null) {
                            if (sencilla > 0) {
                                crearTarjetaHabitacion("Sencilla", sencilla);
                            }
                            if (doble > 0) {
                                crearTarjetaHabitacion("Doble", doble);
                            }
                            if (junior > 0) {
                                crearTarjetaHabitacion("Junior", junior);
                            }
                            if (suite > 0) {
                                crearTarjetaHabitacion("Suite", suite);
                            }
                        } else if (tipoHabitacion == "Todas") {
                            var numHuespedes = document.getElementById("huespedes0").value;
                            if (numHuespedes <= 2) {
                                if (sencilla > 0) {
                                    crearTarjetaHabitacion("Sencilla", sencilla);
                                }
                                if (doble > 0) {
                                    crearTarjetaHabitacion("Doble", doble);
                                }
                                if (junior > 0) {
                                    crearTarjetaHabitacion("Junior", junior);
                                }
                                if (suite > 0) {
                                    crearTarjetaHabitacion("Suite", suite);
                                }
                            } else if (numHuespedes <= 4) {
                                if (doble > 0) {
                                    crearTarjetaHabitacion("Doble", doble);
                                }
                                if (junior > 0) {
                                    crearTarjetaHabitacion("Junior", junior);
                                }
                                if (suite > 0) {
                                    crearTarjetaHabitacion("Suite", suite);
                                }
                            } else if (numHuespedes <= 6) {
                                if (junior > 0) {
                                    crearTarjetaHabitacion("Junior", junior);
                                }
                                if (suite > 0) {
                                    crearTarjetaHabitacion("Suite", suite);
                                }
                            } else if (numHuespedes <= 8) {
                                if (suite > 0) {
                                    crearTarjetaHabitacion("Suite", suite);
                                }
                            }
                        } else {

                            if (tipoHabitacion == "Sencilla" && sencilla > 0) {
                                crearTarjetaHabitacion2("Sencilla", sencilla);
                            }
                            if (tipoHabitacion == "Doble" && doble > 0) {
                                crearTarjetaHabitacion2("Doble", doble);
                            }
                            if (tipoHabitacion == "Junior" && junior > 0) {
                                crearTarjetaHabitacion2("Junior", junior);
                            }
                            if (tipoHabitacion == "Suite" && suite > 0) {
                                crearTarjetaHabitacion2("Suite", suite);
                            }
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
            }
        }
    });
}

function crearTarjetaHabitacion(tipoHabitacion, numDisponibles) {
    var res = document.getElementById("tablaResultados");
    //Version horizontal
    var card = document.createElement('div');
    card.className = "card mb-4";
    card.style.maxWidth = "100%";
    res.appendChild(card);
    card.id = tipoHabitacion;
    var div1 = document.createElement('div');
    div1.className = "row no-gutters";
    card.appendChild(div1);
    var div2 = document.createElement('div');
    div2.className = "col-sm-5";
    div2.style.background = "#868e96";
    div1.appendChild(div2);
    var img = document.createElement('img');
    img.className = "card-img-top h-100";
    div2.appendChild(img);
    var div3 = document.createElement('div');
    div3.className = "col-sm-7";
    div1.appendChild(div3);
    var cardBody = document.createElement('div');
    cardBody.className = "card-body";
    div3.appendChild(cardBody);
    var h5 = document.createElement('h5');
    h5.className = "card-title";
    cardBody.appendChild(h5);
    var p = document.createElement('p');
    p.className = "card-text";
    cardBody.appendChild(p);
    var btnReservar = document.createElement('button');
    btnReservar.className = "btn btn-primary btnReservar";
    btnReservar.innerText = "Reservar";
    btnReservar.name = tipoHabitacion;
    btnReservar.setAttribute("data-toggle", "modal");
    //btnReservar.setAttribute("data-target", "#modalReservacion");
    //btnReservar.addEventListener("click", cargarTicket(this.name));
    btnReservar.onclick = function() { cargarTicket(this.name) };
    cardBody.appendChild(btnReservar);

    if (this.hotelL == "NYC") {
        obtenerPrecio2(tipoHabitacion);
        switch (tipoHabitacion) {
            case "Sencilla":
                img.src = "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-156,2282-3000,0000-1687,4999/publish/content/dam/fourseasons/images/web/NYF/NYF_1357_original.jpg";
                //img.src = "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg";
                h5.innerText = "Habitación Sencilla";
                p.innerText = "1 Cama King Size \n 2 Personas máximo \n Costo por noche: $900\nPrecio:$" + precio + "\nDisponibles: " + numDisponibles;
                break;
            case "Doble":
                img.src = "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-265,1912-3000,0000-1687,4999/publish/content/dam/fourseasons/images/web/NYF/NYF_1389_original.jpg";
                //img.src = "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg";
                h5.innerText = "Habitación Doble";
                p.innerText = "2 Cama King Size \n 4 Personas máximo\n Costo por noche: $1400\n Precio:$" + precio + "\nDisponibles: " + numDisponibles;
                break;
            case "Junior":
                //img.src = "/TravelAgency/assets/img/hotel-nyc/junior.jpg";
                img.src = "https://www.fourseasons.com/content/dam/fourseasons/images/web/NYF/NYF_1376_aspect16x9.jpg/jcr:content/renditions/cq5dam.web.468.263.jpeg";
                h5.innerText = "Habitación Junior";
                p.innerText = "3 Cama King Size \n 6 Personas máximo \n Costo por noche: $1900\n Precio:$" + precio + "\nDisponibles: " + numDisponibles;
                break;
            case "Suite":
                img.src = "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-505,4763-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/NYF/NYF_125_original.jpg";
                h5.innerText = "Habitación Suite";
                p.innerText = "4 Cama King Size \n 8 Personas máximo\n Costo por noche: $2400\n Precio:$" + precio + "\nDisponibles: " + numDisponibles;
                break;
        }
    } else {
        obtenerPrecioMex2(tipoHabitacion);
        switch (tipoHabitacion) {
            case "Sencilla":
                //img.src = "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-156,2282-3000,0000-1687,4999/publish/content/dam/fourseasons/images/web/NYF/NYF_1357_original.jpg";
                img.src = "https://cms.posadas.com/posadas/Brands/ONE/Region/Mexico/Hotels/OGC/Catalogs/Media/OGC/800X600/handicapped_room800x600.jpg";
                h5.innerText = "Habitación Sencilla";
                p.innerText = "1 Cama King Size \n 2 Personas máximo \n Costo por noche: $700\nPrecio:$" + precio + "\nDisponibles: " + numDisponibles;
                break;
            case "Doble":
                //img.src = "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-265,1912-3000,0000-1687,4999/publish/content/dam/fourseasons/images/web/NYF/NYF_1389_original.jpg";
                img.src = "https://cms.posadas.com/posadas/Brands/ONE/Region/Mexico/Hotels/OGC/Catalogs/Media/OGC/800X600/standard_room_2double.jpg";
                h5.innerText = "Habitación Doble";
                p.innerText = "2 Cama King Size \n 4 Personas máximo\n Costo por noche: $1100\n Precio:$" + precio + "\nDisponibles: " + numDisponibles;
                break;
            case "Junior":
                img.src = "https://media-cdn.tripadvisor.com/media/photo-s/0c/3f/69/0d/habitacion-junior-suite.jpg";
                //img.src = "https://www.fourseasons.com/content/dam/fourseasons/images/web/NYF/NYF_1376_aspect16x9.jpg/jcr:content/renditions/cq5dam.web.468.263.jpeg";
                h5.innerText = "Habitación Junior";
                p.innerText = "3 Cama King Size \n 6 Personas máximo \n Costo por noche: $1500\n Precio:$" + precio + "\nDisponibles: " + numDisponibles;
                break;
            case "Suite":
                img.src = "https://pix6.agoda.net/hotelImages/49004/-1/20a1bcb58c64f4980ae26c7380535fbe.jpg?s=1024x768";
                h5.innerText = "Habitación Suite";
                p.innerText = "4 Cama King Size \n 8 Personas máximo\n Costo por noche: $2000\n Precio:$" + precio + "\nDisponibles: " + numDisponibles;
                break;
        }
    }
    //obtenerPrecio2(tipoHabitacion);



}

function crearTarjetaHabitacion2(tipoHabitacion, numDisponibles) {
    var numHuespedes = document.getElementById("huespedes0").value;
    if (numHuespedes <= 2) {
        crearTarjetaHabitacion(tipoHabitacion, numDisponibles)
    } else if (numHuespedes <= 4) {
        if (tipoHabitacion != "Sencilla") {
            crearTarjetaHabitacion(tipoHabitacion, numDisponibles);
            document.getElementById("errorResultados").hidden = true;
        } else {
            document.getElementById("errorResultados").hidden = false;
        }
    } else if (numHuespedes <= 6) {
        if (tipoHabitacion == "Sencilla" || tipoHabitacion == "Doble") {
            document.getElementById("errorResultados").hidden = false;
        } else {
            crearTarjetaHabitacion(tipoHabitacion, numDisponibles);
            document.getElementById("errorResultados").hidden = true;
        }
    } else if (numHuespedes <= 8) {
        if (tipoHabitacion == "Suite") {
            crearTarjetaHabitacion(tipoHabitacion, numDisponibles);
            document.getElementById("errorResultados").hidden = true;
        } else {
            document.getElementById("errorResultados").hidden = false;
        }
    }
}

function reservar() {
    var ciudad = document.getElementById("ciudadReservacion").value;
    // FIXME checar si esta loggeado el cliente
    if (ciudad == "CDMX") {
        var llegada = $("#fechaLlegadaReservacion").val();
        var fechaLlegada = llegada.split("/").reverse().join('-');
        var salida = $("#fechaSalidaReservacion").val();
        var fechaSalida = salida.split("/").reverse().join('-');
        
        var cliente = usuario.email;
        var nombre = usuario.nombre;
        nombre = nombre.split('/');
        axios.get(URL_HOTEL_MX + 'clientes/' + cliente).then((response) => {
            console.log(response.data);
            if(response.data.mensaje == "usuario existe"){
                var reservacion = {
                    Usuario: cliente,
                    tipoHabitacion: $('#tipoHabitacionTicket').text(),
                    fechaLlegada: fechaLlegada,
                    fechaSalida: fechaSalida,
                    personas: parseInt($('#huespedesTicket').text(), 10),
                    precio: parseInt($('#precioTicket').text(), 10),
                }
                console.log("ya existe usuario");
                console.log(reservacion);
                realizarReservacionMEX(reservacion);
            } else {
                console.log("crear usuario");
                new Vue({
                    created: function() {
                        this.recuperarPost();
                    },
                    data: {
                        cliente: []
                    },
                    methods: {
                        recuperarPost: function() {
                            var nombre = usuario.nombre;
                            nombre = nombre.split('/');
                            var apellido = nombre[1];
                            nombre = nombre[0];
                            var correo = usuario.email;
                            let json = JSON.stringify({ nombre, apellido, correo});
                            console.log(json);
                            this.$http.post('providers/hotel-mex-soap.php', { metodo: 0, json: json }).then(function(respuesta) {
                                this.cliente = respuesta.data;
                                if (this.cliente.respuesta == "exito"){
                                    axios.get(URL_HOTEL_NYC + 'cliente/last').then((response) => {
                                        var reservacion = {
                                            Usuario: usuario.email,
                                            tipoHabitacion: $('#tipoHabitacionTicket').text(),
                                            fechaLlegada: fechaLlegada,
                                            fechaSalida: fechaSalida,
                                            personas: parseInt($('#huespedesTicket').text(), 10),
                                            precio: parseInt($('#precioTicket').text(), 10),
                                        }
                                        console.log(reservacion);
                                        realizarReservacionMEX(reservacion);
                                    }).catch((error) => {
                                        console.log(error);
                                        $('#modalReservacion').modal('hide');
                                        $('#errorReservacionModal').modal('show');
                                    });
                                }
                            });
                        }
                    }
                });
            }
            
        }).catch((error) => {
            console.log(error);
        });

    } else if (ciudad == "NYC") {
        var llegada = $("#fechaLlegadaReservacion").val();
        var fechaLlegada = llegada.split("/").reverse().join('-');
        var salida = $("#fechaSalidaReservacion").val();
        var fechaSalida = salida.split("/").reverse().join('-');
        // verificar si existe el cliente en la base de datos del hotel
        //if (usuario != null){ // Si existe recuperar el id
        var cliente = {
            correo: usuario.email
        }
        var nombre = usuario.nombre;
        nombre = nombre.split('/');
        axios.post(URL_HOTEL_NYC + 'cliente', cliente).then((response) => {
            console.log(response.data.cliente);
            if (response.data.cliente != "No existe") {
                var reservacion = {
                    idCliente: response.data.cliente.idCliente,
                    tipoHabitacion: $('#tipoHabitacionTicket').text(),
                    fechaLlegada: fechaLlegada,
                    fechaSalida: fechaSalida,
                    numPersonas: parseInt($('#huespedesTicket').text(), 10),
                    precio: parseInt($('#precioTicket').text(), 10),
                    status: 'vigente',
                }
                console.log("ya existe usuario");
                console.log(reservacion);
                realizarReservacionNYC(reservacion);
            } else {
                console.log("crear usuario");
                new Vue({
                    created: function() {
                        this.recuperarPost();
                    },
                    data: {
                        cliente: []
                    },
                    methods: {
                        recuperarPost: function() {
                            var nombre = usuario.nombre;
                            nombre = nombre.split('/');
                            var apellido = nombre[1];
                            nombre = nombre[0];
                            var correo = usuario.email;
                            let json = JSON.stringify({ nombre, apellido, correo });
                            console.log(json);
                            this.$http.post('providers/hotel-nyc-soap.php', { metodo: 0, json: json }).then(function(respuesta) {
                                this.cliente = respuesta.data;
                                if (this.cliente.respuesta == "exito") {
                                    axios.get(URL_HOTEL_NYC + 'cliente/last').then((response) => {
                                        var reservacion = {
                                            idCliente: response.data.cliente,
                                            tipoHabitacion: $('#tipoHabitacionTicket').text(),
                                            fechaLlegada: fechaLlegada,
                                            fechaSalida: fechaSalida,
                                            numPersonas: parseInt($('#huespedesTicket').text(), 10),
                                            precio: parseInt($('#precioTicket').text(), 10),
                                            status: 'vigente',
                                        }
                                        console.log(reservacion);
                                        realizarReservacionNYC(reservacion);
                                    }).catch((error) => {
                                        console.log(error);
                                        $('#modalReservacion').modal('hide');
                                        $('#errorReservacionModal').modal('show');
                                    });
                                }
                            });
                        }
                    }
                });
            }

        }).catch((error) => {
            console.log(error);
        });
    }
}

function realizarReservacionNYC(reservacion) {
    console.log('reservar');
    axios.post(URL_HOTEL_NYC + 'reservacion', reservacion).then((response) => {
        $('#modalReservacion').modal('hide');
        $('#successReservacionModal').modal('show');
    }).catch((error) => {
        console.log(error);
        $('#modalReservacion').modal('hide');
        $('#errorReservacionModal').modal('show');
    });
}

function realizarReservacionMEX(reservacion){
    console.log('reservar');
    axios.post(URL_HOTEL_MX + 'reservaciones', reservacion).then((response) => {
        $('#modalReservacion').modal('hide');
        $('#successReservacionModal').modal('show');
    }).catch((error) => {
        console.log(error);
        $('#modalReservacion').modal('hide');
        $('#errorReservacionModal').modal('show');
    });
}

function cargarTicket(tipoH) {
    if (usuario != null) {
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

        if (this.hotelL == "NYC") {
            obtenerPrecio();
        } else {
            obtenerPrecioMex();
        }
        //obtenerPrecio();
        $('#modalReservacion').modal('show');
    } else {
        //$('#modalReservacion').modal('hide');
        $('#iniciarParaReservarModal').modal('show');
    }


}

function actualizarDatos() {
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


    if (this.hotelL == "NYC") {
        obtenerPrecio();
    } else {
        obtenerPrecioMex();
    }
    //obtenerPrecio();
}

function obtenerPrecio2(tipo) {
    var llegada = $("#checkIn0").val();
    var fechaLlegada = llegada.split("/");
    var salida = $("#checkOut0").val();
    var fechaSalida = salida.split("/");

    llegada = new Date(fechaLlegada[2], fechaLlegada[1], fechaLlegada[0]);
    salida = new Date(fechaSalida[2], fechaSalida[1], fechaSalida[0]);

    var diferenciaTiempo = Math.abs(salida.getTime() - llegada.getTime());
    let milisegundosEnDia = (1000 * 3600 * 24);

    let diferenciaDias = Math.ceil(diferenciaTiempo / milisegundosEnDia);

    switch (tipo) {
        case "Sencilla":
            if (diferenciaDias <= 1) {
                precio = 900;
            } else {
                precio = 900 * diferenciaDias;
            }
            break;
        case "Doble":
            if (diferenciaDias <= 1) {
                precio = 1400;
            } else {
                precio = 1400 * diferenciaDias;
            }
            break;
        case "Junior":
            if (diferenciaDias <= 1) {
                precio = 1900;
            } else {
                precio = 1900 * diferenciaDias;
            }
            break;
        case "Suite":
            if (diferenciaDias <= 1) {
                precio = 2400;
            } else {
                precio = 2400 * diferenciaDias;
            }
            break;
    }
}

function obtenerPrecio() {

    var tipo = document.getElementById("tipoHabitacionReservacion").value;
    var llegada = $("#fechaLlegadaReservacion").val();
    var fechaLlegada = llegada.split("/");
    var salida = $("#fechaSalidaReservacion").val();
    var fechaSalida = salida.split("/");

    llegada = new Date(fechaLlegada[2], fechaLlegada[1], fechaLlegada[0]);
    salida = new Date(fechaSalida[2], fechaSalida[1], fechaSalida[0]);

    var diferenciaTiempo = Math.abs(salida.getTime() - llegada.getTime());
    let milisegundosEnDia = (1000 * 3600 * 24);

    let diferenciaDias = Math.ceil(diferenciaTiempo / milisegundosEnDia);

    let total = 0;
    document.getElementById("precioTicket").innerText = "";
    switch (tipo) {
        case "Sencilla":
            if (diferenciaDias <= 1) {
                document.getElementById("precioTicket").innerText = 900;
            } else {
                total = 900 * diferenciaDias;
                document.getElementById("precioTicket").innerText = total;
            }
            break;
        case "Doble":
            if (diferenciaDias <= 1) {
                document.getElementById("precioTicket").innerText = 1400;
            } else {
                total = 1400 * diferenciaDias;
                document.getElementById("precioTicket").innerText = total;
            }
            break;
        case "Junior":
            if (diferenciaDias <= 1) {
                document.getElementById("precioTicket").innerText = 1900;
            } else {
                total = 1900 * diferenciaDias;
                document.getElementById("precioTicket").innerText = total;
            }
            break;
        case "Suite":
            if (diferenciaDias <= 1) {
                document.getElementById("precioTicket").innerText = 2400;
            } else {
                total = 2400 * diferenciaDias;
                document.getElementById("precioTicket").innerText = total;
            }
            break;
    }
}

function obtenerPrecioMex2(tipo) {
    var llegada = $("#checkIn0").val();
    var fechaLlegada = llegada.split("/");
    var salida = $("#checkOut0").val();
    var fechaSalida = salida.split("/");

    llegada = new Date(fechaLlegada[2], fechaLlegada[1], fechaLlegada[0]);
    salida = new Date(fechaSalida[2], fechaSalida[1], fechaSalida[0]);

    var diferenciaTiempo = Math.abs(salida.getTime() - llegada.getTime());
    let milisegundosEnDia = (1000 * 3600 * 24);

    let diferenciaDias = Math.ceil(diferenciaTiempo / milisegundosEnDia);

    switch (tipo) {
        case "Sencilla":
            if (diferenciaDias <= 1) {
                precio = 700;
            } else {
                precio = 700 * diferenciaDias;
            }
            break;
        case "Doble":
            if (diferenciaDias <= 1) {
                precio = 1100;
            } else {
                precio = 1100 * diferenciaDias;
            }
            break;
        case "Junior":
            if (diferenciaDias <= 1) {
                precio = 1500;
            } else {
                precio = 1500 * diferenciaDias;
            }
            break;
        case "Suite":
            if (diferenciaDias <= 1) {
                precio = 2000;
            } else {
                precio = 2000 * diferenciaDias;
            }
            break;
    }
}

function obtenerPrecioMex() {

    var tipo = document.getElementById("tipoHabitacionReservacion").value;
    var llegada = $("#fechaLlegadaReservacion").val();
    var fechaLlegada = llegada.split("/");
    var salida = $("#fechaSalidaReservacion").val();
    var fechaSalida = salida.split("/");

    llegada = new Date(fechaLlegada[2], fechaLlegada[1], fechaLlegada[0]);
    salida = new Date(fechaSalida[2], fechaSalida[1], fechaSalida[0]);

    var diferenciaTiempo = Math.abs(salida.getTime() - llegada.getTime());
    let milisegundosEnDia = (1000 * 3600 * 24);

    let diferenciaDias = Math.ceil(diferenciaTiempo / milisegundosEnDia);

    let total = 0;
    document.getElementById("precioTicket").innerText = "";
    switch (tipo) {
        case "Sencilla":
            if (diferenciaDias <= 1) {
                document.getElementById("precioTicket").innerText = 700;
            } else {
                total = 700 * diferenciaDias;
                document.getElementById("precioTicket").innerText = total;
            }
            break;
        case "Doble":
            if (diferenciaDias <= 1) {
                document.getElementById("precioTicket").innerText = 1100;
            } else {
                total = 1100 * diferenciaDias;
                document.getElementById("precioTicket").innerText = total;
            }
            break;
        case "Junior":
            if (diferenciaDias <= 1) {
                document.getElementById("precioTicket").innerText = 1500;
            } else {
                total = 1500 * diferenciaDias;
                document.getElementById("precioTicket").innerText = total;
            }
            break;
        case "Suite":
            if (diferenciaDias <= 1) {
                document.getElementById("precioTicket").innerText = 2000;
            } else {
                total = 2000 * diferenciaDias;
                document.getElementById("precioTicket").innerText = total;
            }
            break;
    }
}

function aplicarFiltros() {
    var ciudad = document.getElementById("ciudad").value;

    if (ciudad == "CDMX") {
        actualizarSelectTipoHabitacion(ciudad);
        recuperarHotelMEX(tipoHabitacion);
    } else if (ciudad == "NYC") {
        // FIXME se cambia el tipo de habitacion al picar aplicar filtros
        var tipoHabitacion = document.getElementById("tipoHabitacion").value;
        actualizarSelectTipoHabitacion(ciudad);
        recuperarHotelNYC(tipoHabitacion);
    }
}



// FIXME checar que la fecha checkin no sea mayor a la fecha check out