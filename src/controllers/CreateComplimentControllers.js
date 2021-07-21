const CreateComplimentService = require('./../services/createComplimentService');

class CreateComplimentController {
    async handle (request, response) {
        const compliment = await CreateComplimentService.execute(request.body);
        return response.json(compliment);
    }
}

module.exports = new CreateComplimentController();