const CreateTagService = require('./../services/CreateTagService');

class CreateTagController {
    async handle(request, response) {
        const tagName = await CreateTagService.execute(request.body);
        return response.json(tagName);
    }
}

module.exports = new CreateTagController();