// Requires
var expres = require('express');
var mongoose = require('mongoose');


//inicializar variables
var app = expres();

// conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos online');
});


//escuchar peticiones
app.listen(3000, () => {
    console.log('Expres server puerto 3000 online');
});

// Rutas

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'peticion realizada correctamente'
    });


});