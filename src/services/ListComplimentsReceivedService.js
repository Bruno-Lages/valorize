const Compliment = require('./../models/Compliment');

class ListComplimentsReceivedService {
    async execute(userId) {
        const compliments = await Compliment.findAll({ where: { user_receiver: userId }});
        return compliments;
    }
}

module.exports = new ListComplimentsReceivedService();