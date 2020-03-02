const jwt = require("jsonwebtoken");
const config = require('../config');

exports.auth = (req, res, next) => {
    const token_header = req.headers.auth;
    if (!token_header) return res.send({status: 401, error: 'token inválido.'});

    jwt.verify(token_header, config.saltKey, (err, decoded) => {
        if (err) return res.send({status: 401, error: 'token inválido.'});
        return next();
    })
}

exports.createUserToken = (userId) => {
    return jwt.sign({ id: userId }, config.saltKey, { expiresIn: '1d' });
}