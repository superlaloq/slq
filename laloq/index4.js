const express = require("express") // requerimos Modulo express

const app = express () // La app requiere express como servidor



app.listen(3000) // escucha por el puerto 3000
console.log("Servicio corriendo por el puerto $(3000)")
