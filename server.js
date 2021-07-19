const Express = require('express');
require('express-async-errors');
const {ValidationError} = require('sequelize');

require('./src/database');

const Router = require('./src/routes');
const app = Express();

app.use(Express.json());

app.use(Router);

app.use((err, request, response, next) => {
    if (err instanceof Error && !(err instanceof ValidationError) ) {
        const errorMessage = err.message.slice(0, -4);
        const errorStatus = err.message.slice(-3)
        console.log(errorStatus);
        return response.status(errorStatus).json({
            error: errorMessage,
        });
    } else if (err instanceof ValidationError) {
        return response.status(400).json({
            error: err.errors.map((error) => error.message),
        })
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error' 
    });
})

app.listen(80, () => console.log('everything is fine'));