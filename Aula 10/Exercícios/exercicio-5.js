import express from 'express'

const app = express()

app.use(express.json())

const livros = [];
let proximoId = 1;

app.get("/livros", (req, res) => {
    return res.json(livros)
})

app.get("/livros/:id", (req, res) => {
    const id = Number(req.params.id);

    const livro = livros.find(l => l.id === id)

    if(!livro) {
        return res.status(404).json({erro : "Livro não encontrado!"})
    }

    return res.json(livro)
})

app.post("/livros", (req, res) => {
    const { titulo, autor } = req.body

    if (!titulo || !autor) {
        return res.status(400).json({
            erro: "Titulo e autor não obrigatórios!"
        })
    }

    const novoLivro = {
        id : proximoId++,
        titulo,
        autor
    }

    livros.push(novoLivro);

    return res.status(201).json(novoLivro);
})

app.put("/livros/:id", (req, res) => {
    const id = Number(req.params.id);

    const { titulo, autor } = req.body;

    const indice = livros.findIndex(l => l.id === id);

    if (indice === -1) {
        return res.status(404).json({erro : "Livro não encontrado!"})
    }

    livros[indice] = {
        id,
        titulo,
        autor
    }

    return res.json(livros[indice])
})

app.delete("/livros/:id", (req, res) => {
    const id = Number(req.params.id);

    const indice = livros.findIndex(l => l.id === id);

    if (indice === -1) {
        return res.status(404).json({erro : "Livro não encontrado!"})
    }

    livros.splice(indice, 1)

    return res.status(204).send();
})

//Rota inexistente -> 404
app.use((req, res) => {
    return res.status(404).json({erro : "Rota não encontrada!"})
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})