
const Cliente = require('../models/Cliente')

// Función agregar clientes
exports.agregarClientes = async (req, res) => {

    try {
        let clientes
        clientes = new Cliente(req.body)
        await clientes.save()
        res.send(clientes)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un cliente')
    }
}

exports.mostrarClientes = async (req, res) => {

    try {
        const clientes = await Cliente.find()
        res.json(clientes)

    } catch (error) {
        console.log(error)
        res.status(500).send('Error al mostrar los clientes.')
    }
}

exports.buscarCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id)
        if (!cliente) {
            res.status(404).json({ msg: 'No se encuentra el cliente' })
        } else {
            res.send(cliente)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al consultar el cliente')
    }
}

/* exports.actualizarClientes = async (req, res) => {
    try{
        const {nombres, apellidos, documento, correo, telefono, nit, direccion} = req.body
        let cliente = await Cliente.findById(req.params.id)

        if(!cliente){
            res.status(404).json({msg: 'El cliente no existe'})
            return
        }

        cliente.nombres = nombres
        cliente.apellidos = apellidos
        cliente.documento = documento
        cliente.correo = correo
        cliente.telefono = telefono
        cliente.nit = nit
        cliente.direccion = direccion

        cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente, {new: true})
        res.json(cliente)
    }
    catch (error){
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el cliente')
    }
} Este método actualizar no lo vamos a utilizar */

/* exports.actualizarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.findOneAndUpdate(
            { _id: req.params.id }, req.body)
        if (!cliente) res.status(404).send('Cliente no encontrado')
        else
            res.json(cliente)
    } catch (error) {
        concole.log(error)
        res.status(500).send('Hubo un error al consultar el cliente')
    }
} */

exports.modificarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!cliente) {
            return res.status(404).send('Cliente no encontrado')
        } else {
            res.json(cliente)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al consultar el cliente')
    }
}

exports.eliminarClientes = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id)
        if (!clientes) {
            res.status(404).send('Cliente no encontrado')
        } else {
            await Cliente.findOneAndDelete({ _id: req.params.id })
            res.json({ msg: "El cliente ha sido eliminado" })
        }
    } catch {
        console.log(error)
        res.status(500).send('Hubo un error al consultar el cliente')
    }
}