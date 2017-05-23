const mongoose = require('mongoose');


const statusSchema = new mongoose.Schema({
    // identificador del estado
    _id: Number,
    // descripción del estado
    desc: String
});

module.exports = mongoose.model('status', statusSchema);
