const CreateComplimentService = require('./../services/createComplimentService');

class CreateComplimentController {
    async handle (request, response) {
        const userSender = request.user_id;
        const compliment = await CreateComplimentService.execute(userSender, request.body);
        return response.json(compliment);
    }
}

module.exports = new CreateComplimentController();