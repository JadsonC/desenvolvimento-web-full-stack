export function validarUsuario(req, res, next) {
    const { nome } = req.body;

    if(!nome) {
        const err = new Error('nome é obrigatório')
        err.status = 400;
        return next(err);
    }

    next();
}