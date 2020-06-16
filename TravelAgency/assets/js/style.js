$(document).ready(function() {

    var i = 0;
    var txt = 'Travel Agent la única agencia de viajes que necesita';
    var speed = 100;
    if (i < txt.length) {
        document.getElementById("textoBienvenida").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("textoBienvenida").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }


});