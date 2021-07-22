const Router = require('express').Router();

const checkLoggedUserMiddleware = require('./middlewares/checkLoggedUserMiddleware');
const checkAdminUserMiddleware = require('./middlewares/checkAdminUserMiddleware');

const CreateUserController = require('./controllers/CreateUserController');
const CreateTagController = require('./controllers/CreateTagController');
const AuthenticateUserController = require('./controllers/AuthenticateUserController');
const CreateComplimentController = require('./controllers/CreateComplimentControllers');

Router.post('/users/create', CreateUserController.handle);
Router.post('/users/login', AuthenticateUserController.handle);
Router.post('/tags/create', checkLoggedUserMiddleware, checkAdminUserMiddleware, CreateTagController.handle);
Router.post('/compliments/create', checkLoggedUserMiddleware, CreateComplimentController.handle);

module.exports = Router;