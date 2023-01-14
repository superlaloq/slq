const express = require("express") // requerimos Modulo express

const app = express () // La app requiere express como servidor

app.get("/",(req,res)=>{  // Al visitar la ruta y solicitar el recibe y responde
    res.sendFile("./static/index.html", { // Envia el archivo estatico index.html
    
    }) 
})

app.get("/",(req,res)=>{  // Al visitar la ruta y solicitar el recibe y responde
    res.sendFile("./static/about.html", { // Envia el archivo estatico index.html
    
    }) 
})



app.listen(3000) // escucha por el puerto 3000
console.log("Servicio corriendo por el puerto $(3000)")