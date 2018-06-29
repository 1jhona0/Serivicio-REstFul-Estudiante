var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    ci: String,
    //CU: {NroCu: String,Carrera: String},
    cu: String,
    apellido: String,
    nombre: String,
    dateCreate: String,
});
mongoose.model('Estudiante', UserSchema);

module.exports = mongoose.model('Estudiante');