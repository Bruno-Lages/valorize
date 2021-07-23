const ListComplimentsSendedService = require('./../services/ListComplimentsSendedService');

class ListComplimentsSendedController {
    async handle(request, response) {
        const compliments = await ListComplimentsSendedService.execute(request.params.id);
        return response.json(compliments);
    }
}

module.exports = new ListComplimentsSendedController();