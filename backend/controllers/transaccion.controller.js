const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

    transaccionCtrl.getTransacciones = async (req, res) => {
        const Transacciones = await Transaccion.find();
        res.json(Transacciones);
    }
    transaccionCtrl.createTransaccion = async (req, res) => {
        const transaccion = new Transaccion(req.body);
        try {
            await transaccion.save();
            res.status(200).json({
                'status': '1',
                'msg': 'Transaccion guardada.'
            })
        } catch (error) {
            res.status(400).json({
                'status': '0',
                'msg': 'Error procesando operacion.'
            })
        }
    }

    transaccionCtrl.getTransaccionesPorCliente = async (req, res) => {
        const transacciones = await Transaccion.find({ emailCliente: req.query.email });
        res.json(transacciones);
    };
      
    transaccionCtrl.getTransaccionesPorDivisas = async (req, res) => {
        const transacciones = await Transaccion.find({
          monedaOrigen: req.query.de,
          monedaDestino: req.query.a
        });
        res.json(transacciones);
    };
      

module.exports = transaccionCtrl;
