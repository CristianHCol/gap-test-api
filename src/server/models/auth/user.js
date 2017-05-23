const mongoose = require('mongoose');

const schema = mongoose.Schema;

const usersSchema = new schema({
    // email del usuario    
    email: { type: String, required: true, trim: true, index: { unique: true } },
    // contraseña   del usuario
    password: { type: String, required: true },
    // estado de un usuario
    active: Boolean,
    // rol aprobador, preparador, pre_apro, excecuter, read_only
    role: String,
    // fecha primer login
    firstLogin: { type: Date, default: Date.now },
    // fecha último acceso
    lastLoginAcces: Date,
    // fecha última recuperación de clave
    recoveryPassword: Date,
    // última plataforma de ingreso (web, movil)
    type_platfform: String,
    // area a la que pertenece el usuario
    area: String
});

module.exports = mongoose.model('users', usersSchema);
