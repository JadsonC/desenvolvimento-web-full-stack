import express from 'express'

const app = express();

app.use(express.json());

const usuarios = [
    { id: 1, nome: 'Jadson' },
    { id: 2, nome: 'César' },
];

const produtos = [
    { id: 1, nome: 'Notebook', categoria: 'eletronicos' },
    { id: 2, nome: 'Cadeira', categoria: 'moveis' },
    { id: 3, nome: 'Mouse', categoria: 'eletronicos' },
]

//Utilizando Query Strings
app.get('/produtos', (req, res) => {
    const { categoria } = req.query

    if (categoria) {
        const filtrados = produtos.filter(p => p.categoria === categoria);
        return res.json(filtrados)
    }

    res.json(produtos)
})

app.get('/usuarios', (req, res) => {
    console.log(req.query)
    res.json(usuarios)
})

// PARAMETROS DE ROTA
app.get('/usuarios/:id', (req, res) => {
    console.log(req.params)
    const id = Number(req.params.id);

    const usuario = usuarios.find(u => u.id === id)

    if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' })
    }

    res.json(usuario)
})

// QUERY STRINGS

app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;

    const { id, nome } = novoUsuario
    console.log(nome)

    usuarios.push(novoUsuario);
    res.status(201).json({ mensagem: 'Usuário criado', usuario: novoUsuario })
})

// app.get('/rota', (req, res) => { })
// app.post('/rota', (req, res) => { })
// app.put('/rota', (req, res) => { })
// app.delete('/rota', (req, res) => { })

// GET: buscar dados
// POST: criar um novo recurso
// PUT: substituir um recurso completo
// PATCH: atualizar parcialmente um recurso
// DELETE: remover um recurso

//Rota não encontrada - sempre por último
app.use((req, res) => {
    res.status(404).json({ erro: 'Rota não encontrada' })
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})