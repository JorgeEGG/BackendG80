const express = require('express')
const router = express.Router()
const jugadorController = require('../controllers/jugadorContoller')

// creamos las rutas del CRUD
router.post('/', jugadorController.agregarJugadores)
router.get('/', jugadorController.mostrarJugadores)
router.get('/:id', jugadorController.buscarJugador)
//router.put('/:id', jugadorController.actualizarJugador)
router.patch('/:id', jugadorController.modificarJugador)
router.delete('/:id', jugadorController.eliminarJugador)


module.exports = router