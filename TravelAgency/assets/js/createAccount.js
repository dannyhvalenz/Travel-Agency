//Utilidad Email
var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
//Referencias 
var alertaRegister = $('#alertaRegister');
var spinnerLoadingCreate = $('#spinnerLoadingCreate');
var messageAlert = $('#messageAlert');


alertaRegister.hide();
spinnerLoadingCreate.hide();

let crearCuenta = () => {
    let email = $('#emaiRegister');
    let password = $('#passwordRegister');
    let passwordConfirmacion = $('#passwordConfRegister');
    let nombre = $('#nameRegister');
    let apellido = $('#apellidoRegister');

    if (nombre.val().length == 0 || apellido.val().length == 0 || email.val().length == 0 || password.val().length == 0 || passwordConfirmacion.val().length == 0) {
        (alertaRegister.is(':hidden')) ? alertaRegister.show(200): null;
        messageAlert.html('').prepend('Todos los campos deben estar llenados');
    } else if (!caract.test(email.val())) {
        (alertaRegister.is(':hidden')) ? alertaRegister.show(200): null;
        messageAlert.html('').prepend('El Email no es valido');
    } else if (password.val() !== passwordConfirmacion.val()) {
        (alertaRegister.is(':hidden')) ? alertaRegister.show(200): null;
        messageAlert.html('').prepend('La contraseña de confirmación no concide con la contraseña ingresda');
    } else {
        (alertaRegister.is(':hidden')) ? null: alertaRegister.hide(200);
        spinnerLoadingCreate.show(200);

        var fullName = `${nombre.val()} ${apellido.val()}`;

        var usuario = {
            nombre: fullName,
            email: email.val(),
            password: password.val(),
        }

        axios.post(URL_SERVICE + '/usuario', usuario)
            .then((response) => {
                spinnerLoadingCreate.hide(200);
                var data = response.data;
                $('#userRegister').prepend(data.usuario.nombre);
                $('#crearCuentaModal').modal('hide');
                $('#successAccountModal').modal('show');
            })
            .catch((error) => {

                spinnerLoading.hide(200);
                if (error.response.status == 400) {
                    var data = error.response.data;
                    console.log('Código de error', data.error.code);
                    (alertaRegister.is(':hidden')) ? alertaRegister.show(200): null;
                    messageAlert.html('').prepend(data.error.message);
                } else {
                    (alertaRegister.is(':hidden')) ? alertaRegister.show(200): null;
                    messageAlert.html('').prepend('Error de conexión con el servidor');
                }
            });



    }

}