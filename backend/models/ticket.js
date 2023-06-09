const mongoose = require('mongoose');
const { Schema } = mongoose;
const Espectador = require('./espectador');
const TicketSchema = new Schema({
    precio: { type: Number, required: true },
    fechaCompra: { type: String, required: true }, 
    espectador: {type: Schema.Types.ObjectId, ref: Espectador, required: true },
    categoriaEspectador: {
        type: String,
        enum: ['local', 'extranjero'],
        required: true
    }
    
})
module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema)