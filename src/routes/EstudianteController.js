var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
//var User = require('../user/User');
var Estudiante = require('../user/Estudiante');

// CREATES A NEW USER
router.post('/', function(req, res) {
    Estudiante.create({
            ci: req.body.ci,
           // CU: {"NroCu":req.body.NroCu,"Carrera":req.body.Carrera},
            cu: req.body.cu,            
            apellido: req.body.apellido,
            nombre: req.body.nombre,
            dateCreate: new Date()
        },
        function(err, estudiantes) {
            if (err) return res.status(500).send("There was a problem registering the user.")
            res.status(200).send({ mensaje: "usuario registrado" });
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function(req, res, next) {
    Estudiante.find({}, function(err, estudiantes) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(estudiantes);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function(req, res) {
    Estudiante.findById(req.params.id, function(err, estudiante) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!estudiante) return res.status(404).send("No user found.");
        res.status(200).send(estudiante);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function(req, res, next) {
    Estudiante.findByIdAndRemove(req.params.id, function(err, estudiante) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("Estudiante: " + estudiante.Nombre + " was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function(req, res) {
    Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, estudiante) {
        if (err) return res.status(500).send("There was a problem updating the estuden.");
        res.status(200).send(estudiante);
    });
});

module.exports = router;
// No hay metodos en servicios rest 
//rest led complemento para comprobar o POSTMAN 
