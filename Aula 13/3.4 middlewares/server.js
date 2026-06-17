// server.js
import './src/database/connection.js'; // inicializa e testa a conexão ao subir o servidor
import app from './src/app.js';

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});