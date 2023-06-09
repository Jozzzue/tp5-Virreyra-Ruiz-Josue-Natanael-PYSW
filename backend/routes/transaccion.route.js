const transaccionCtrl = require('./../controllers/transaccion.controller.js');
const express = require('express');
const router = express.Router();

router.get('/transacciones', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/transacciones/cliente', transaccionCtrl.getTransaccionesPorCliente);
router.get('/transacciones/divisas', transaccionCtrl.getTransaccionesPorDivisas);



module.exports = router;      