import express from 'express'

const app = express()

app.use(express.json())

const tarefas = []

app.get('/tarefas', (req, res) => {
    res.json(tarefas)
})

app.post('/tarefas', (req, res) => {
    const { titulo } = req.body

    if(!titulo) {
        return res.status(400).json({
            erro : 'Titulo é obrigatório'
        })
    }

    const novaTarefa = {
        id: Date.now(), // retorna o número de milissegundos desde 1º de janeiro de 1970,
        titulo: titulo
    }

    tarefas.push(novaTarefa)

    return res.status(201).json(novaTarefa)
})

app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)

    const indice = tarefas.findIndex(t => t.id === id)

    if (indice === -1) {
        return res.status(404).json({
            erro : 'Tarefa não encontrada'
        })
    }

    //remove pelo índice e modifica o array (a partir da posição indice, 
    // remove 1 item)
    
    tarefas.splice(indice, 1)

    return res.status(204).send()

})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})