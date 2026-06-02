import http from 'http'

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json')

    if (req.method === 'GET' && req.url === '/produtos') {
        const produtos = [
            { id: 1, nome: 'Teclado'},
            { id: 2, nome: 'Mouse'},
            { id: 3, nome: 'Monitor'}
        ];

        res.writeHead(200);
        res.end(JSON.stringify(produtos));
        return; 
    }

    if (req.method === 'DELETE' && req.url === '/produtos') {
        res.writeHead(204)
        res.end();
        return;
    }

    if (req.method === 'POST' && req.url === '/produtos') {
        let body = '';

        req.on('data', (chunk) => {
            body = body + chunk.toString()
        })

        req.on('end', () => {
            try {
                const produto = JSON.parse(body);
                res.writeHead(201);
                res.end(JSON.stringify({mensagem: 'Produto criado', produto}))
            }
            catch (err) {
                res.writeHead(400);
                res.end(JSON.stringify({erro: 'JSON inválido', err}))
            }
        })

        return;
    }
})

server.listen(3000, () => console.log('Rodando em http://localhost:3000'))