const Compliment = require('./../models/Compliment');

class IndexComplimentsService {
    async execute(){
        const compliments = await Compliment.findAll();
        return compliments;
    }
}

module.exports = new IndexComplimentsService();