const express = require('express')
const router = express.Router()
const jugadorController = require('../controllers/jugadorContoller')

// creamos las rutas del CRUD
router.post('/', jugadorController.agregarJugadores)
router.get('/', jugadorController.mostrarJugadores)
router.get('/:id', jugadorController.buscarJugador)
//router.put('/:id', clienteController.actualizarClientes)
/* router.patch('/:id', clienteController.modificarClientes)
router.delete('/:id', clienteController.eliminarClientes)
 */

module.exports = router