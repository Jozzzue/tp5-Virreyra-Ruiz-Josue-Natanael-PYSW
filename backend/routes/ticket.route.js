const ticketCtrl = require('./../controllers/ticket.controller.js');
const express = require('express');
const router = express.Router();

router.get('/tickets', ticketCtrl.getTickets);
router.get('/tickets/:categoria', ticketCtrl.getTicketsPorCategoriaEspectador);
router.post('/', ticketCtrl.createTicket);
router.get('/:id', ticketCtrl.getTicket);
router.put('/:id',ticketCtrl.editTicket);
router.delete('/:id',ticketCtrl.deleteTicket);

module.exports = router;      