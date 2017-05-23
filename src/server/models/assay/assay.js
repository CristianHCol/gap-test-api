const mongoose = require('mongoose');

const schema = mongoose.Schema;

const assaySchema = new schema({
    // lugar de ejecución de un ensayo
    location: String,
    // name of assay excecuters
    excecuters: [String],
    // objetos de tipo de types
    test_type: Object,
    // fecha en la que se ejecutó el ensayo
    excecuted: Date,
    // normas aplicables al ensayo
    norms: [Object],
    //Relación con objeto Status
    status: schema.status.ObjectId,
    //array de notas
    notes: [String],
    //array de url de imagenes, o de base 64
    images: [String],
    // costo unitario por ensayo
    unit_price: { type: Number, default: 0 }
});

assaySchema.index({ test_type: 1, excecuters: 1 });
module.exports = mongoose.model('assays', assaySchema);
