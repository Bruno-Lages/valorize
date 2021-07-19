const CreateUserService = require('../services/CreateUserService');

class CreateUserController{
    async handle(request, response) {
        const user = await CreateUserService.execute(request.body);
        return response.json(user);
    }
}

module.exports = new CreateUserController();