const express = require("express") // requerimos Modulo express

const app = express () // La app requiere express como servidor

app.use(express.static('public')) // el servidor apunta al contenido de public y responde

app.listen(3000) // escucha por el puerto 3000
console.log("Servicio corriendo por el puerto $(3000)")
// Para ejecutar el programa llamarlodesde la consola con la expresion node index.js
// El programa esta correctamente ejecutandose y lo podemos ver en el inspector del navegador.
