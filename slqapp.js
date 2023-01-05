   // slqapp

   // requiere comprender basicamente html css js
   // servidor web local publico o privado 
   // eduardobarria dedicado a los estudiantes de fullStack JavaSript

const express = require("express");// Declarando estas lineas implementamos un modulo que con su funsión 
    // permite crear un objeto http Una especie de caja con carpetas dentro 
    // o completamente vacías para almacenar programas de repositorios
const path = require (`path`);// este camino nos lleba al archivo
    // un módulo dirigido a direccionamientos por ejemplo los ficheros de la app
const fs = require (`fs`);
const http = require (`http`);// este modulo permite el protocolo http fundamental para las web

const slqapp = express();

slqapp.use(express.static('assets'));
slqapp.use(express.static('public'));
slqapp.use('/static', express.static(__dirname + '/public'));
    // mi falta de experiencia no logra descifrar el desenlace final de este codigo 

slqapp.get (`/`, (req, res) => {
res.sendFile (path.join(__dirname, `index.html`));
    // Esta solicitud al metodo join, nos proporciona el 
    // cotejador de rutas. Crupie de las direcciones separadas
    // une trozos y de la solucion final del archivo, el direccionamiento.
   console.log(__dirname);
});

    // el servidor entrega servicios y escucha pedidos de servicio, por el puerto 3000.
slqapp.listen (3000, () => {
 console.log( `Servidor corriendo por el puerto`, 3000)
});