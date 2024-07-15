const express = require('express')
const ConectarBD = require('../config/db')  // Esto se hace después de configurar el archivo 'db.js'.
const cors = require('cors')

const app = express()
const port = 5000

// Enlazar conexión con la base de datos
ConectarBD()
app.use(cors())

app.use(express.json())
app.use('/api/clientes', require('../routes/cliente'))
app.use('/api/jugadores', require('../routes/jugador')) 

app.get('/', (req, res) => {
    res.send('Bienvenido, estamos desde el navegador') // o console.log()
})

app.listen(port, () => console.log('El servidor está conectado al puerto', port))
