const CreateUSerService = require('./../services/CreateUSerService');

class CreateUSerController{
    async handle(request, response) {
        try{
            const user = await CreateUSerService.execute(request.body);
            return response.json(user);
        } catch(e) {
            console.log(e);
        };
    }
}

module.exports = new CreateUSerController();