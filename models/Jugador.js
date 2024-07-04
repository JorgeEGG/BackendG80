const mongoose = require('mongoose')

// El modelo que vamos a implementar debe ser el mismo a la base de datos

const jugadorSchema = mongoose.Schema({

    nombres: {
        type: String,
        required: true
    },

    apellidos: {
        type: String,
        required: true
    },

    cedula: {
        type: Number,
        required: true
    },


    fecnacimiento: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        required: true
    },

    numeroContacto: {
        type: Number,
        required: true
    },

    equipo: {
        type: String,
        required: true
    },

    ciudad: {
        type: String,
        required: true
    },

    estadio: {
        type: String,
        required: true
    }

}, { versionkey: false })

module.exports = mongoose.model('Jugador', jugadorSchema)