// ATENÇÃO: as rotas que respondem os exercícios devem ficar no app.js para serem testados

//3.4 Exercício 1

// app.use((req, res, next) => {
//     const horario = new Date().toLocaleTimeString();
//     console.log(`${req.method} ${req.url} ${horario}`)

//     next();
// })

// app.get('/usuarios', (req, res) => {
//     res.json([
//         { id: 1, nome: 'Jadson' },
//         { id: 2, nome: 'César' },
//     ])
// })


//3.4 Exercício 2
// app.post('/produtos', (req, res, next) => {
//     // const { nome, preco } = req.body;

//     if (!req.body.nome || !req.body.preco) {
//         return res.status(400).json({
//             erro : 'nome e preço são obrigatórios'
//         })
//     }

//     next();
// }, (req, res) => {
//     res.status(201).json({
//         mensagem: 'Produto criado'
//     })
// })


//3.4 Exercício 3
// app.use((req, res, next) => {
//     console.log("Etapa 1");
//     next();
// })

// app.use((req, res, next) => {
//     console.log("Etapa 2");
//     next();
// })

// app.use((req, res, next) => {
//     console.log("Etapa 3");
//     next();
// })

// app.get('/inicio', (req, res) => {
//     res.json({"mensagem" : "Bem-vindo!"})
// })

//

// 3.4 Exercício 4

// app.use((req, res, next) => {
//     return res.status(503).json({ "mensagem": "Servidor em manutenção" })
// })

// 3.4 Exercício 5

// function validarNome(req, res, next) {
//     if(!req.body.nome) {
//         return res.status(400).json({ "erro": "nome é obrigatório" })
//     }

//     next();
// }

// app.post('/usuarios', validarNome, (req, res) => {
//     res.status(201).json({ "mensagem": "Usuário criado" });
// })

// app.post('/produtos', validarNome, (req, res) => {
//     res.status(201).json({ "mensagem": "Produto criado" });
// })


// 3.4 Exercício 6
// function validarMensagem(req, res, next) {
//     if (!req.body.texto) {
//         return res.status(400).json({ "erro": "texto é obrigatório" })
//     }

//     if(req.body.texto.length < 5) {
//         res.status(400).json({ "erro": "texto deve ter ao menos 5 caracteres" })
//     }

//     next();
// }

// app.post('/mensagens', validarMensagem, (req, res) => {
//     return res.status(201).send()
// })


// Práticas durante a aula

// middleware que interpreta o corpo da requisição como JSON
//sem ele, o req.body seria undefined nas rotas
// app.use(express.json())

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// })

// app.get('/usuarios', (req, res) => {
//     res.json([
//         { id: 1, nome: 'Jadson' },
//         { id: 2, nome: 'César' },
//     ])
// })

// app.post('/usuarios', (req, res, next) => {
//     if (!req.body.nome) {
//         return res.status(400).json({
//             erro: 'nome é obrigatório'
//         });
//     }

//     next();
// },
//     (req, res) => {
//         res.status(201).json({ mensagem: 'Usuário criado!' })
//     }
// )