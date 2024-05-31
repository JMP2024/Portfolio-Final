<?php
    // Datos de conexión
    $servidor = "localhost";
    $usuario = 'root';
    $clave = '';
    $baseDeDatos = 'formulario'; 

    // Conectar a la base de datos
    $enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

    // Verificar la conexión
    if (!$enlace) {
        die("Conexión fallida: " . mysqli_connect_error());
    }

    // Procesar los datos del formulario
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Obtener los datos del formulario
        $name = mysqli_real_escape_string($enlace, $_POST['name']);
        $company = mysqli_real_escape_string($enlace, $_POST['company']);
        $email = mysqli_real_escape_string($enlace, $_POST['email']);
        $message = mysqli_real_escape_string($enlace, $_POST['message']);

        // Crear la consulta SQL
        $query = "INSERT INTO datos (Nombre, `Nombre Compañia`, Email, Mensaje) VALUES ('$name', '$company', '$email', '$message')";

        // Ejecutar la consulta
        if (mysqli_query($enlace, $query)) {
            // Redirigir al archivo Formulario.html después de enviar el formulario
            header("Location: http://localhost/LMSGI/Tercer%20Trimestre/Portfolio-master/Portfolio.html");
            exit();
        } else {
            echo "Error: " . $query . "<br>" . mysqli_error($enlace);
        }
        
    }
    // Cerrar la conexión
    mysqli_close($enlace);
?>
