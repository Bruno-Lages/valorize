const ListComplimentsReceivedService = require('./../services/ListComplimentsReceivedService');

class ListComplimentsReceivedController {
    async handle(request, response) {
        const compliments = await ListComplimentsReceivedService.execute(request.params.id);
        return response.json(compliments);
    }
}

module.exports = new ListComplimentsReceivedController();