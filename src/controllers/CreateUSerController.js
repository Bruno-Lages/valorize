const CreateUSerService = require('./../services/CreateUSerService');

class CreateUSerController{
    async handle(request, response) {
        const user = await CreateUSerService.execute(request.body);
        return response.json(user);
    }
}

module.exports = new CreateUSerController();