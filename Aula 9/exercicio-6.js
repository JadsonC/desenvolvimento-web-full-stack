import http from 'http';

let itens = [];
let proximoId = 1;

function erro(res, status, mensagem) {
  res.writeHead(status);
  res.end(JSON.stringify({ erro: mensagem }));
}

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader('Content-Type', 'application/json');

  if (method === 'GET' && url === '/itens') {
    res.writeHead(200);
    res.end(JSON.stringify(itens));
    return;
  }

  if (method === 'POST' && url === '/itens') {
    let body = '';
    req.on('data', (chunk) => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const dados = JSON.parse(body);
        const novoItem = { id: proximoId++, nome: dados.nome };
        itens.push(novoItem);
        res.writeHead(201);
        res.end(JSON.stringify(novoItem));
      } catch {
        erro(res, 400, 'JSON inválido');
      }
    });
    return;
  }

  if (method === 'PUT' && url === '/itens') {
    let body = '';
    req.on('data', (chunk) => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const dados = JSON.parse(body);
        const item = itens.find((i) => i.id === dados.id);
        if (!item) return erro(res, 404, 'Item não encontrado');
        item.nome = dados.nome;
        res.writeHead(200);
        res.end(JSON.stringify(item));
      } catch {
        erro(res, 400, 'JSON inválido');
      }
    });
    return;
  }

  if (method === 'DELETE' && url === '/itens') {
    let body = '';
    req.on('data', (chunk) => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const dados = JSON.parse(body);
        const index = itens.findIndex((i) => i.id === dados.id);
        if (index === -1) return erro(res, 404, 'Item não encontrado');
        itens.splice(index, 1);
        res.writeHead(204);
        res.end();
      } catch {
        erro(res, 400, 'JSON inválido');
      }
    });
    return;
  }

  erro(res, 404, 'Rota não encontrada');
});

server.listen(3000, () => console.log('Rodando em http://localhost:3000'));