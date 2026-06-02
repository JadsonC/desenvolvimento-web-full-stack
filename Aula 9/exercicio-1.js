import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json')

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200)
        res.end(JSON.stringify({mensagem : 'API funcionando'}))
        return;
    }

    if (req.method === 'GET' && req.url === '/status') {
        res.writeHead(200)
        res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }))
        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({erro : 'Rota não encontrada!'}))
})

server.listen(3000, () => console.log('Rodando em http://localhost:3000'))
