$(document).ready(function() {
    var url = $(this).attr('title');
    var txt = '';
    if (url == 'Travel Agency | Hoteles') {
        txt = 'Travel Agent la única agencia de viajes que necesita';
    } else {
        txt = 'Los mejores viajes con IAero'
    }
    var i = 0;
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