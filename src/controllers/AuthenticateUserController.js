const UserAuthenticationService = require('./../services/UserAuthenticationService');

class AuthenticateUserController {
    async handle(request, response) {
        const token = await UserAuthenticationService.execute(request.body);
        return response.json(token);
    } 
}

module.exports = new AuthenticateUserController();