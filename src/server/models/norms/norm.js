const mongoose = require('mongoose');


const normSchema = new mongoose.Schema({
    // id para una norma registrada
    _id: { type: Number, required: true },
    // nombre de una norma
    name: String
});

module.exports = mongoose.model('norms', normSchema);
