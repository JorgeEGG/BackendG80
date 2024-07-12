const Jugador = require('../models/Jugador')

// Función agregar jugadores
exports.agregarJugadores = async (req, res) => {

    try {
        let jugadores
        jugadores = new Jugador(req.body)
        await jugadores.save()
        res.send(jugadores)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un jugador')
    }
}

exports.mostrarJugadores = async (req, res) => {
    try {
        const jugadores = await Jugador.find()
        res.json(jugadores)
    }

    catch(error){
        console.log(error)
        res.status(500).send('Error al mostrar los jugadores.')
    }
}

exports.buscarJugador = async (req, res) => {

    try {
        let jugador = await Jugador.findById(req.params.id)
        if (!jugador) {
            res.status(404).json({ msg: 'No se encuentra el jugador' })
        } else {
            res.send(jugador)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al consultar el jugador')
    }
}

exports.modificarJugador = async (req, res) => {
    try {
        const jugador = await Jugador.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!jugador) {
            return res.status(404).send('Jugador no encontrado')
        } else {
            res.json(jugador)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al consultar el jugador')
    }
}

exports.eliminarJugador = async (req, res) => {
    try {
        let jugadores = await Jugador.findById(req.params.id)
        if (!jugadores) {
            res.status(404).send('Jugador no encontrado')
        } else {
            await Jugador.findOneAndDelete({ _id: req.params.id })
            res.json({ msg: "El jugador ha sido eliminado" })
        }
    } catch {
        console.log(error)
        res.status(500).send('Hubo un error al consultar el jugador')
    }
}

