import http from 'http';

const nomes = ['Ana', 'Bruno', 'Carla'];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  

  if (req.method === 'GET' && req.url === '/nomes') {
    res.writeHead(200);
    res.end(JSON.stringify(nomes));
    return;
  }

  if (req.method === 'POST' && req.url === '/nomes') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const dado  = JSON.parse(body);
        nomes.push(dado.nome);
        res.writeHead(201);
        res.end(JSON.stringify(nomes));
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ erro: 'JSON inválido' }));
      }
    });

    return;
  }

  if (req.method === 'DELETE' && req.url === '/nomes') {
    nomes.length = 0;
    res.writeHead(204);
    res.end();
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
});

server.listen(3000, () => console.log('Rodando em http://localhost:3000'));