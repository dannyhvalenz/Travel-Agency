/**
 * Recuperar Hoteles
 */


//Mini Base de datos


let db = [{
        nombre: 'Hotel 1',
        ciudad: 'Ciudad 1'
    },
    {
        nombre: 'Hotel 2',
        ciudad: 'Ciudad 1'
    },
    {
        nombre: 'Hotel 3',
        ciudad: 'Ciudad 1'
    },
]

let bandera = false;


// recuperación de valores 

let ciudad = $('#ciudadFiltros option:selected').text();
let habitacion = $('#tipoHabitacion option:selected').text();
let huespedes = document.getElementById('huespedesFiltros');

function getList() {

    console.log({ ciudad, habitacion, huespedes }); //Se muestran los valores obtenidos 
    console.log(db);
    /**
     *  Aquí solo se cambia la bandera a true para que se mueste la lista pero en realidad aquí tendría que estar la peticion al servicio SOAP
     */

    // Petición soap con Viue.js

    // $.noConflict();
    // new Vue({
    //     el: '#listaHoteles', // ID del elemento en el DOM
    //     created: function() {
    //         this.recuperarPost();
    //     },
    //     data: {
    //         vuelos: [] //Se inicializa la data, en el caso de prueba se esta llamando a la Mini Base de datos de hoteles
    //     },
    //     methods: {
    //         recuperarPost: function() {
    //             this.$http.post('providers/soap-connection.php' //Archivo PHP
    //             , { metodo: 0, json: $.cookie('json') }).then(function(respuesta) {
    //                 console.log(respuesta.data.data);
    //                 this.vuelos = respuesta.data;
    //             });
    //         }
    //     }
    // });


    bandera = true;

}