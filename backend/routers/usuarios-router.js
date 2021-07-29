var express = require('express');
var router = express.Router();
var usuarios = require('../models/usuario');
var mongoose = require('mongoose');
/*Usuario*/
router.get('/',function (req, res){
    usuarios.find({},{_id: true, nombre:true,apellido:true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//ordenes
/*Usuario*/
router.get('/:idUsuario/ordenes',function (req, res){
    usuarios.find({_id: req.params.idUsuario},{_id:true,ordenes:true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//crear un coomentario
router.post('/:idUsuario/ordenes',function (req, res) {
    usuarios.update(
        {
            _id:mongoose.Types.ObjectId(req.params.idUsuario)
        },
        {
            $push:{
                "ordenes":{
                    nombreProducto:req.body.nombreProducto,
                    descripcion:req.body.descripcion,
                    precio:req.body.precio,
                    cantidad:req.body.cantidad
                }
            }
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});


module.exports = router;