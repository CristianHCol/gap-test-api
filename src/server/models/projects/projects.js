const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    // identificador de un proyecto
    id: String,
    // nombre de un proyecto
    name: String,
    // codigo de  
    code: String,
    // centro de costos al que pertenece un proycto
    cost_center: String,
    // estado del proyecto
    active: { type: Boolean, default: true }
});

module.exports = mongoose.model('projects', projectSchema);
