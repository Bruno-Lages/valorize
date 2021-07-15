const Router = require('express').Router();

const CreateUSerController = require('./controllers/CreateUSerController');

Router.post('/createUser', CreateUSerController.handle);

module.exports = Router;