<?php
    $email = $_POST['email'];

    mail(
        'cristiandracedo@hotmail.com',
        'agregar a contactos',
        'mensaje enviado desde mi sitio',
        $email
    );
?>