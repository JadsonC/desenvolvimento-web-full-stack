export function errorHandler(err, req, res, next) {
    console.error(err.message);

    res.status(err.status || 500).json({
        erro: err.message || 'Erro interno no servidor'
    });
}