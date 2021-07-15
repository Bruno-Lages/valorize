const Express = require('express');

require('./src/database');

const Router = require('./src/routes');
const app = Express();

app.use(Express.json());

app.use(Router);

app.listen(80, () => console.log('everything is fine'));