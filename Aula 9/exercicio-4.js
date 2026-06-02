import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json')

    if (req.method === 'GET' && req.url === '/info') {
        const host = req.headers['host'] || 'não informado'
        const agente = req.headers['user-agent'] || 'não informado'

        res.writeHead(200);
        res.end(JSON.stringify({ host, agente }))
    }
    res.writeHead(404);
    res.end(JSON.stringify({ erro: 'Rota não encontrada!' }))
})

server.listen(3000, () => console.log('Rodando em http://localhost:3000'))