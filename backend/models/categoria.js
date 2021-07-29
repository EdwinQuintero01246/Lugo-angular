var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombreCategoria: String,
        descripcion: String,
        empresas: Array,
        color:String,
        icono:String
    }
);

module.exports = mongoose.model('categorias', esquema);