$(document).ready(main = () => {
    let date = new Date();
    let hoy = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    let tomorrow = `${date.getDate()+1}-${date.getMonth()}-${date.getFullYear()}`;
    $('#checkIn').attr("min", hoy);
    $('#checkIn').attr("value", hoy);

    $('#checkOut ').attr("min", tomorrow);
    $('#checkOut ').attr("value", tomorrow);

});




function cambiarImagen() {
    var ciudad = document.getElementById("ciudad ").value;
    if (ciudad == "Mexico ") {
        document.getElementById("imagen ").src = "assets/img/mexico.jpg ";
    } else if (ciudad == "EEUU ") {
        document.getElementById("imagen ").src = "assets/img/brooklyn.png ";
    } else if (ciudad == "Canada ") {
        document.getElementById("imagen ").src = "assets/img/canada.png ";
    }
}