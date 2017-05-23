const mongoose = require('mongoose');


const typeTestSchema = new mongoose.Schema({
    // id del tipo de prueba    
    _id: { type: Number, required: true },
    // Nombre del tipo de prueba
    name: String,
    // area a la que pertenece la prueba
    area: String,
    // datos que se deben llenar para completar el reporte
    data: Object
});

module.exports = mongoose.model('testTypes', typeTestSchema);
