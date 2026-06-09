import express from 'express'

const app = express()

app.use(express.json())

const produtos = [
    { id: 1, nome: 'Mouse', categoria: 'Eletronicos' },
    { id: 2, nome: 'Teclado', categoria: 'Eletronicos' },
    { id: 3, nome: 'Mousepad', categoria: 'Eletronicos' },
    { id: 3, nome: 'Sofá', categoria: 'Moveis' },
]

app.get('/produtos', (req, res) => {
    const categoria = req.query.categoria;

    if (!categoria) {
        return res.json(produtos)
    }

    const filtrados = produtos.filter(
        p => p.categoria.toLowerCase() === categoria.toLowerCase()
    )

    return res.json(filtrados)
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})