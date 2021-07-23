const Compliment = require('./../models/Compliment');

class ListComplimentsSendedService {
    async execute(userId) {
        const compliments = await Compliment.findAll({ where: { user_sender: userId }});
        return compliments;
    }
}

module.exports = new ListComplimentsSendedService();