// ### Exercício 3 — Headers e status codes

// Crie um servidor com as rotas:

// - `GET /publico` → status `200` com `{ acesso: 'liberado' }`
// - `GET /restrito` → status `403` com `{ erro: 'Acesso negado' }`
// - `GET /login` → status `401` com `{ erro: 'Não autenticado' }`
// - Rota inexistente → status `404`

import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json')

    if (req.method === 'GET' && req.url === '/publico') {
        res.writeHead(200);
        res.end(JSON.stringify({ acesso: 'liberado' }))
        return;
    }

    if (req.method === 'GET' && req.url === '/restrito') {
        res.writeHead(403);
        res.end(JSON.stringify({ erro: 'Acesso negado' }))
        return
    }

    if (req.method === 'GET' && req.url === '/login') {
        res.writeHead(401);
        res.end(JSON.stringify({ erro: 'Não autenticado' }))
        return
    }

    res.writeHead(404)
    res.end(JSON.stringify({ erro: 'Rota não encontrada!' }))
})


// A função que passo como parâmetro de outra, é chamada de callback
// A função arco () => {}

server.listen(3000, () => {
    console.log("Rodando em http://localhost:3000")
})