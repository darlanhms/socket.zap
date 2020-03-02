const User = require('../models/User');
const { saltHashPassword } = require('../utils/pass-crypto');
const { createUserToken } = require('../utils/auth');

module.exports = {

    login: function (req, res) {

        let { username, password } = req.body;

        if (password)
            password = saltHashPassword(password);

        User.findOne({
            username,
            password
        }).then( function (result) {

            if (result) {
                if (result.password)
                    result.password = undefined;
    
                if (result._id) {
                    result = {...result}._doc;
                    result.token = createUserToken(result.id);
                }
            }

            res.json(result);
        })
    },

    create: async function (req, res) {

        let { name, username, email, password } = req.body;

        if (password)
            password = saltHashPassword(password);

        const checkUser = await User.findOne({ username }) ? true : false;

        if (!checkUser) {
            User.create({
                name,
                username,
                email,
                password
            }).then( function (result) {

                if (result) {
                    if (result.password)
                        result.password = undefined;
    
                    if (result._id) {
                        result = {...result}._doc;
                        result.token = createUserToken(result.id);
                    }
                }

                res.json(result);
            });
        } else {
            res.json({error: "Usuário já cadastrado."});
        }

    }

}