var asientoSelect = {};
//Referencias 
let mensajeError = $('#mensajeError');
let alertaVuelos = $('#alertaVuelos');
let loading = $('#loading');
let resultadosSection = $('#resultadosSection');

$('#spinnerbuy').hide();


loading.hide();
resultadosSection.hide();
alertaVuelos.hide();

$('#asientosSection').hide();


getOrigenLocal = () => {

    if (window.localStorage.getItem('destino') === 'NYC-EU') {
        return 'CDM-MX';
    } else {
        return 'NYC-EU';
    }
}



vuelos = () => {


    //Inputs
    let fecha = $("#datepicker").val();
    let origin = (window.localStorage.getItem('destino')) ? getOrigenLocal() : $("#origin").val();
    let destino = (window.localStorage.getItem('destino')) ? (window.localStorage.getItem('destino')) : $("#destino").val();


    if (fecha == null || origin === 'Origen' || destino == 'Destino') {
        alertaVuelos.show(200);
        mensajeError.html('').prepend('Todos los campos deben estar llenados');
    } else if (origin === destino) {
        alertaVuelos.show(200);
        mensajeError.html('').prepend('El origen y destino no pueden ser iguales');
    } else {
        (alertaVuelos.is(':hidden')) ? null: alertaVuelos.hide(200);
        loading.show(200);
        let json = JSON.stringify({ fecha, origin, destino });
        new Vue({
            el: '#resultadosSection',
            created: function() {
                this.recuperarPost();
            },
            data: {
                vuelos: []
            },
            methods: {
                recuperarPost: function() {
                    this.$http.post('providers/iaero-soap.php', { metodo: 0, json: json }).then(function(respuesta) {
                        this.vuelos = respuesta.data;
                        $('#resultadosSection').show(200);
                        $('#footer').show(1000);
                        $('body').removeClass();

                        $('html, body').animate({

                            scrollTop: $("#resultadosSection").offset().top

                        }, 2000);

                        loading.hide(200);
                        window.localStorage.removeItem('destino');


                    });
                }
            }
        });



    }
}

asientos = (idVuelo) => {

    verificar();
    let token = window.localStorage.getItem('token');
    window.localStorage.setItem('idVuelo', idVuelo);
    new Vue({
        el: '#asientosSection',
        created: function() {
            this.recuperarPost();
        },
        data: {
            asientos: [],
            showModal: (token != null) ? true : false,
        },
        methods: {
            recuperarPost: function() {
                this.$http.post('providers/iaero-soap.php', { metodo: 1, id: idVuelo }).then(function(respuesta) {
                    this.asientos = respuesta.data;

                    console.log(this.showModal);
                    $('#resultadosSection').hide(200);
                    $('#asientosSection').show(200);

                });
            }
        }
    });
}


selectAsiento = (asiento) => {

    axios.post(URL_SERVICE + '/verificar', null, {
            headers: {
                'Authorization': window.localStorage.getItem('token'),
            }
        })
        .then((response) => {
            asientoSelect = {
                id: asiento.id,
                codigo: asiento.codigo,
                status: asiento.status
            };
            var usuario = response.data;

            $('#nombreFormBuy').val(usuario.nombre);
            $('#emailFormBuy').val(usuario.email);
            $('#codigoAsiento').prepend(asiento.codigo);

            $('#modalConfirmar').modal('show');

        })
        .catch((error) => {
            window.localStorage.removeItem('token');
            $('#modalIniciarSesion').modal('show');
            selectAsiento(id);
        });



}

function buyTicket() {
    $('#spinnerbuy').show();
    var compra = {
        nombre: $('#nombreFormBuy').val(),
        email: $('#emailFormBuy').val(),
        phone: $('#phoneFormBuy').val(),
        idAsiento: asientoSelect.id,
        numeroVuelo: window.localStorage.getItem('idVuelo'),
        codigoAsiento: asientoSelect.codigo,
    }

    console.log(compra);

    axios.post(URL_SERVICE + '/compra', compra, {
        headers: {
            'Authorization': window.localStorage.getItem('token'),
        }
    }).then((response) => {
        var data = response.data;
        $('#modalConfirmar').modal('hide');
        $('#origenSuccess').prepend((data.origen === "CDM-MX") ? 'Ciudad de México, México' : 'New York, Estados Unidos');
        $('#destinoSuccess').prepend((data.destino === "NYC-EU") ? 'New York, Estados Unidos' : 'Ciudad de México, México');
        $('#nombreSuccess').prepend(data.nombre);
        $('#emailSuccess').prepend(data.email);
        $('#fechaSuccess').prepend(recuperarFecha(convert(data.fecha)));
        $('#codigoAsientoSuccess').prepend(data.codigoAsiento);
        $('#horaSalidaSuccess').prepend(data.hora);
        $('#spinnerbuy').hide();
        $('#modalBuySuccess').modal('show');

        window.localStorage.setItem('destino', (data.destino === 'NYC-EU') ? 'NYC' : 'CDMX');

        console.log(response.data);

    }).catch((error) => {
        console.log(error);
        if (error.response.status) {
            if (error.response.status == 401) {
                $('#spinnerbuy').hide();
                $('#modalIniciarSesion').modal('show');
                buyTicket();
            } else {
                $('#spinnerbuy').hide();
                console.error(error.response.data.error.code, error.response.data.error.message);
            }
        }
    });
}