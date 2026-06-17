import express from 'express'
import { validarUsuario } from './middlewares/validarUsuario.js';
import { errorHandler } from './middlewares/errorHandler.js';
import morgan from 'morgan'

const app = express();

app.use(express.json())

app.use(morgan('dev'))

app.post('/usuarios', validarUsuario, (req, res) => {
    res.status(201).json({
        mensagem : 'Usuário criado!'
    })
})

app.use(errorHandler);

export default app; // exporta o app para que o server.js possa importá-lo