//Utilidades 
var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

//Referencias
var messageLogin = $('#messageLogin');
var alertaLogin = $('#alertaLogin');
var spinner = $('#spinnerLoadingLogin');
alertaLogin.hide();
spinner.hide();

let login = () => {
    let email = $('#emailLogin');
    let password = $('#passwordLogin');

    if (email.val().length == 0 || password.val().length == 0) {
        (alertaLogin.is(':hidden')) ? alertaLogin.show(200): null;
        messageLogin.html('').prepend('Todos los campos deben estar llenados');
    } else if (!caract.test(email.val())) {
        (alertaLogin.is(':hidden')) ? alertaLogin.show(200): null;
        messageLogin.html('').prepend('El email no es valido');
    } else {
        (alertaLogin.is(':hidden')) ? null: alertaLogin.hide(200);
        spinner.show(200);
        var usuario = {
            email: email.val(),
            password: password.val(),
        }

        axios.post(URL_SERVICE + '/login', usuario)
            .then((response) => {
                spinner.hide(200);
                $('#iniciarSesionModal').modal('hide');
                var data = response.data;
                console.log(data);
                window.localStorage.setItem('token', data.token);
                if (window.localStorage.getItem('idVuelo')) {
                    asientos(window.localStorage.getItem('idVuelo'));
                }
                verificar();


            })
            .catch((error) => {
                spinner.hide(200);
                console.log(error);
                (alertaLogin.is(':hidden')) ? alertaLogin.show(200): null;
                messageLogin.html('').prepend(error.response.data.err.message);
            });
    }
}