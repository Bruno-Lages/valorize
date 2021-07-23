const IndexComplimentsService = require('./../services/IndexComplimentsService');

class IndexComplimentsController {
    async handle(request, response) {
        const compliments = await IndexComplimentsService.execute();
        return response.json(compliments);
    }
}

module.exports = new IndexComplimentsController();