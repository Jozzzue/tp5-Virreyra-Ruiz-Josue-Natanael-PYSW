//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller.js');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/productos', productoCtrl.getProductos); // 
router.get('/productos/destacados', productoCtrl.getProductosDestacados); // http://localhost:3000//api/agente
router.post('/', productoCtrl.createProducto);
router.get('/:id', productoCtrl.getProducto); // http//:localhost:3000//api/agente/123123123
router.put('/:id', productoCtrl.editProducto);
router.delete('/:id', productoCtrl.deleteProducto);
//exportamos el modulo de rutas
module.exports = router;      