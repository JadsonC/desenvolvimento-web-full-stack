import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mensagem: 'API com Express funcionando' })
})

app.get('/status', (req, res) => {
    res.json({ status: 'ok' })
})

app.use((req, res) => {
    res.status(404).json({ erro: 'Rota não encontrada' })
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})