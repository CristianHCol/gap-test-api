const mongoose = require('mongoose');

const schema = mongoose.Schema;

const requestSchema = new schema({
    //id de la solicitud
    id: { type: String, trim: true, required: true },
    // titulo asignado a la solicitud title = area+consecutive
    title: { type: String, trim: true, required: true },
    // fecha de creación de la solicitud
    requested: { type: Date, default: Date.now },
    // Usuario que solicitó
    requester: String,
    // aprovador de la solicitud
    approver: String,
    // centro de costos
    cost_center: String,
    // numero de productos a testear
    quantity: Number,
    // referencia de producto a testear
    product_reference: String,
    // fecha de inicio de ejecución de la solicitud
    start: { type: Date, default: Date.now },
    // fecha de fin de ejecución de la solicitud
    end: Date,
    // notas relacionadas
    notes: [String],
    // ensayos solicitados para una referencia
    assay: [schema.assays.ObjectId],
    // estado de la solicitud
    status: schema.status.ObjectId,
    // campo para manejar el color de la solicitud en el calendario
    backgroundColor: String,
    // area a la que pertenece el reporte ej: Calefacción, Refigeración o Lavado
    area: String,
    // precio total de la solicitud
    total_price: { type: Number, default: 0 },
});

requestSchema.index({ id: 1, requested: 1, product_reference: 1, assay: 1 });
module.exports = mongoose.model('events', requestSchema);
