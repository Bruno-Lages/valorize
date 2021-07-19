const Router = require('express').Router();

const CreateUserController = require('./controllers/CreateUserController');
const CreateTagController = require('./controllers/CreateTagController');

Router.post('/users/create', CreateUserController.handle);
Router.post('/tags/create', CreateTagController.handle);

module.exports = Router;