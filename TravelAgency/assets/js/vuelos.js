//Referencias 
let mensajeError = $('#mensajeError');
let alertaVuelos = $('#alertaVuelos');
let loading = $('#loading');
let resultadosSection = $('#resultadosSection');

loading.hide();
resultadosSection.hide();
alertaVuelos.hide();


let vuelos = () => {


    //Inputs
    let fecha = $("#datepicker").val();
    let origin = $("#origin").val();
    let destino = $("#destino").val();

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

        console.log(json);

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
                        console.log(this.vuelos);
                        $('#resultadosSection').show(200);
                        $('#footer').show(1000);
                        $('body').removeClass();

                        $('html, body').animate({

                            scrollTop: $("#resultadosSection").offset().top

                        }, 2000);

                        loading.hide(200);


                    });
                }
            }
        });



    }
}