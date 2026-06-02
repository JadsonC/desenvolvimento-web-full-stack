import http from 'http' //Padrão moderno ECMAScript Modules ESM

//Criar o servidor
const server = http.createServer((req, res) => {
    // tanto o req quando o res possuem head e body
    const method = req.method
    const url = req.url

    //O método GET utilizamos para buscar algo
    // Rota GET/
    if (method === 'GET' && url === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'}) // Avisa o cliente que receberá JSON
        res.end(JSON.stringify({mensagem: 'Bem-vindo à API'}))
        return;
    }

    //Rota GET /usuarios
    if (method === 'GET' && url === '/usuarios') {
        const usuarios = [
            { id: 1, nome: 'Jadson' },
            { id: 2, nome: 'César' }
        ]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(usuarios))
        return;
    }

    // O método POST utilizamos para criar algo
    //Rota POST /usuarios
    if (method === 'POST' && url === '/usuarios') {
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({mensagem: 'Usuário criado!'}))
        return;
    }

    // Rota não encontrada
    res.writeHead(404, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({erro : 'Rota não encontrada'}))
})

// Inicia o servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})