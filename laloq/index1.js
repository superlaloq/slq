const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
const read = fs.createWriteStream("./static/index.html")
read.pipe(res)
})

server.listen(3000)
console.log("Servidor corriendo por el puerto ${3000}")
