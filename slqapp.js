const express = require("express");
    // Declarando estas lineas implementamos un modulo que con su funsión 
    // permite la creasión de un objeto http.
const path = require (`path`);
    // este camino nos lleba al archivo, un módulo dirigido al desarrollador
    //     de los direccionamientos por ejemplo de los ficheros de la app.
const fs = require (`fs`);
const http = require (`http`);
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


slqapp.listen (3000, () => {
 console.log( `Servidor corriendo por el puerto`, 3000)
});