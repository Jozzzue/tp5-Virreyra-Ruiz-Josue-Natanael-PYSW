const Ticket = require('../models/ticket');
const ticketCtrl = {}

    ticketCtrl.getTickets = async (req, res) => {
        const tickets = await Ticket.find().populate("espectador");
        res.json(tickets);
    }
    ticketCtrl.getTicketsPorCategoriaEspectador = async (req, res) => {
        if (req.params.categoria.toLowerCase() === "locales" || req.params.categoria.toLowerCase() === "local" || req.params.categoria.toLowerCase() === "l") {
            req.params.categoria = "local";
          } else if (req.params.categoria.toLowerCase() === "extranjeros" || req.params.categoria.toLowerCase() === "extranjero" || req.params.categoria.toLowerCase() === "e") {
            req.params.categoria = "extranjero";
          }
        const tickets = await Ticket.find({ categoriaEspectador: req.params.categoria }).populate("espectador");
        res.json(tickets);
    }

    ticketCtrl.createTicket = async (req, res) => {
        if (req.body.categoriaEspectador.toLowerCase() === "l") {
            req.body.categoriaEspectador = "local";
          } else if (req.body.categoriaEspectador.toLowerCase() === "e") {
            req.body.categoriaEspectador = "extranjero";
          }
        const ticket = new Ticket(req.body);
        try {
            await ticket.save();
            res.status(200).json({
                'status': '1',
                'msg': 'Ticket guardado.'
            })
        } catch (error) {
            res.status(400).json({
                'status': '0',
                'msg': 'Error procesando operacion.'
            })
        }
    }

    ticketCtrl.editTicket = async (req, res) => {
        try {
            console.log(req.body);
        if (req.body.categoriaEspectador.toLowerCase() === "l") {
            req.body.categoriaEspectador = "local";
          } else if (req.body.categoriaEspectador.toLowerCase() === "e") {
            req.body.categoriaEspectador = "extranjero";
          }
        const ticket = new Ticket(req.body);
            await Ticket.updateOne({ _id: req.body._id }, ticket);
            res.status(200).json({
                'status': '1',
                'msg': 'Ticket updated'
            })
        } catch (error) {
            res.status(400).json({
                'status': '0',
                'msg': 'Error procesando la operacion'
            })
        }
    }

    ticketCtrl.deleteTicket = async (req, res) => {
        try {
            await Ticket.deleteOne({ _id: req.params.id });
            res.json({
                status: '1',
                msg: 'Ticket removed'
            })
        } catch (error) {
            res.status(400).json({
                'status': '0',
                'msg': 'Error procesando la operacion'
            })
        }
    }

    ticketCtrl.getTicket = async (req, res) => {
        try {
            const ticket = await Ticket.findById(req.params.id);
            res.json(ticket);
        } catch (error) {
            res.status(400).json({
                'status': '0',
                'msg': 'Error procesando la operacion'
            })
        }
    }

module.exports = ticketCtrl;
