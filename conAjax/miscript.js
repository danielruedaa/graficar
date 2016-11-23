$(document).ready(function() {

    // getdeails será nuestra función para enviar la solicitud ajax
    var getdetails = function(id) {

        return $.getJSON("personas.php", {

            "id": id

        });

    }

    // Al hacer click sobre cualquier elemento que tenga el atributo data-user.....
    $('[data-user]').click(function(e) {

        // Detenemos el comportamiento normal del evento click sobre el elemento clicado
        e.preventDefault();

        // Mostramos texto de que la solicitud está en curso
        $("#response-container").html("<p>Buscando...</p>");

        // this hace referencia al elemento que ha lanzado el evento click
        // con el método .data('user') obtenemos el valor del atributo data-user de dicho elemento y lo pasamos a la función getdetails definida anteriormente
        getdetails( $(this).data('user') )

        .done(function(response) {
