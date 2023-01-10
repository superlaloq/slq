// archivo sqapp.js

const express = require('express'); // importamos express
const http = require('http'); // importamos http

const port = 3000; // especificamos el puerto
const path = __dirname; // especificamos el directorio

const app = express(); // inicializamos la app

app.use(express.static(path)); // configuramos el servidor para servir archivos estáticos

// conectamos la base de datos
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'db_name'
});

db.connect((err) => {
  if (err) {
    console.log('Error al conectar con la base de datos: ' + err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// creamos el servidor
const server = http