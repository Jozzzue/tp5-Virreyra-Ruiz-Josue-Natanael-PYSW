const espectadorCtrl = require('./../controllers/espectador.controller.js');
const express = require('express');
const router = express.Router();

router.get('/espectadores', espectadorCtrl.getEspectadores); 
router.post('/', espectadorCtrl.createEspectador);
router.get('/:id', espectadorCtrl.getEspectador);

module.exports = router;      