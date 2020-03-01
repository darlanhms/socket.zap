const {Router} = require('express');
const UserController = require('./controllers/UserController');


const routes = Router();

routes.post('/users/login', UserController.login);
routes.post('/users/create', UserController.create);

module.exports = routes;