import express from 'express'

const app = express();

app.use(express.json());

const produtos = [
    { id: 1, nome: 'Notebook', categoria: 'eletronicos' },
    { id: 2, nome: 'Cadeira', categoria: 'moveis' },
    { id: 3, nome: 'Mouse', categoria: 'eletronicos' },
]

app.get('/produtos', (req, res) => {
    res.json(produtos)
})

app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id)

    const produto = produtos.find(p => p.id === id)

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado!" })
    }

    res.json(produto)

})

app.use((req, res) => {
    res.status(404).send("Rota não encontrada")
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})