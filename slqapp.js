const express = require("express");
    // Declarando estas lineas implementamos un modulo que con su funsión 
    // permite la creasión de un objeto http.
const path = require (`path`);
    // este camino nos lleba al archivo, un módulo dirigido al desarrollador
    //     de los direccionamientos por ejemplo de los ficheros de la app.
const fs = require (`fs`);
const http = require (`http`);
const slqapp = express();


//slqapp.use(express.static('assets'));
slqapp.use(express.static('public'));
//slqapp.use('/static', express.static(__dirname + '/public'));


slqapp.get (`/`, (req, res) => {
res.sendFile (path.join(__dirname, `index.html`));
   console.log(__dirname);
});


slqapp.listen (3000, () => {
 console.log( `Servidor corriendo por el puerto`, 3000)
});