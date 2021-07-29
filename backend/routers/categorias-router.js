var express = require('express');
var router = express.Router();
var categoria = require('../models/categoria');
var mongoose = require('mongoose');
/*todas las categorias*/
router.get('/',function (req, res){
    categoria.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});
/* crear una nueva categoria*/ 
router.post('/',function (req, res) {
    let category = new categoria({
        _id : mongoose.Types.ObjectId(),
        nombreCategoria: req.body.nombreCategoria,
        descripcion: req.body.descripcion,
        color: req.body.color,
        icono: req.body.icono,
        empresas:[]
    });
    category.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;