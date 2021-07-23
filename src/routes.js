const Router = require('express').Router();

const checkLoggedUserMiddleware = require('./middlewares/checkLoggedUserMiddleware');
const checkAdminUserMiddleware = require('./middlewares/checkAdminUserMiddleware');

const CreateUserController = require('./controllers/CreateUserController');
const CreateTagController = require('./controllers/CreateTagController');
const AuthenticateUserController = require('./controllers/AuthenticateUserController');
const CreateComplimentController = require('./controllers/CreateComplimentControllers');
const ListComplimentsReceivedController = require('./controllers/ListComplimentsReceivedController');
const ListComplimentsSendedController = require('./controllers/ListComplimentsSendedController');
const IndexComplimentsController = require('./controllers/IndexComplimentsController');

Router.post('/users/create', CreateUserController.handle);
Router.post('/users/login', AuthenticateUserController.handle);
Router.post('/tags/create', checkLoggedUserMiddleware, checkAdminUserMiddleware, CreateTagController.handle);
Router.post('/compliments/create', checkLoggedUserMiddleware, CreateComplimentController.handle);
Router.get('/compliments/received/:id', checkLoggedUserMiddleware, ListComplimentsReceivedController.handle);
Router.get('/compliments/sended/:id', checkLoggedUserMiddleware, ListComplimentsSendedController.handle);
Router.get('/compliments', checkLoggedUserMiddleware, IndexComplimentsController.handle);

module.exports = Router;