const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/clienteController')

// creamos las rutas del CRUD
router.post('/', clienteController.agregarClientes)
router.get('/', clienteController.mostrarClientes)
router.get('/:id', clienteController.buscarCliente)
// router.put('/:id', clienteController.actualizarClientes)
router.patch('/:id', clienteController.modificarClientes)
router.delete('/:id', clienteController.eliminarClientes)


module.exports = router