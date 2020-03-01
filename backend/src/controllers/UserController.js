const User = require('../models/User');
const { saltHashPassword } = require('../utils/pass-crypto');

module.exports = {

    login: function (req, res) {

        let { username, password } = req.body;

        if (password)
            password = saltHashPassword(password);

        User.findOne({
            username,
            password
        }).then( function (result) {
            if (result && result.password) {
                result.password = undefined;
            }
            res.json(result);
        })
    },

    create: function (req, res) {

        let { name, username, email, password } = req.body;

        if (password)
            password = saltHashPassword(password);

        if (!checkUsername(username)) {
            User.create({
                name,
                username,
                email,
                password
            }).then( function (result) {
                if (result && result.password) {
                    result.password = undefined;
                }
                res.json(result);
            });
        } else {
            res.json({error: "Usuário já cadastrado."});
        }

    }

}

async function checkUsername (username) {
    return await User.findOne({ username }) ? true : false;
}