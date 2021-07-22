const { verify } = require('jsonwebtoken');
require('dotenv').config();

module.exports = function CheckLoggedUserMiddleware(request, response, next) {
    if (!request.headers.authorization) throw new Error(['Token is required', 401]);

    const [,token] = request.headers.authorization.split(' ');
    if (!token) throw new Error (['Token is required', 401]);

    try{
    const validToken = verify(token, process.env.JWT_SECRET);
    request.user_id = validToken.sub;
    }catch(e) {
        throw new Error([e, 401]);
    };
    next();
}