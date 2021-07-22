const Compliment = require('./../models/Compliment');
const User = require('./../models/User');
const Tag = require('./../models/Tag');

class CreateComplimentService {
    async execute(userSender, { userReceiver, tag, message }) {

        if (userSender === userReceiver) return new Error (['You can\'t send a compliment to yourself', 400]);
        if (!userReceiver || !tag) return new Error (['Missing information']);

        const validUser = User.findOne({ where: { id: userReceiver } });
        if (!validUser) throw new Error (['The user does not exist', 400]);

        const validTag = Tag.findOne({ where: { id: tag } });
        if (!tag) return new Error (['Invalid tag', 400]);

        const compliment = await Compliment.create({
            user_sender: userSender,
            user_receiver: userReceiver,
            tag_id: tag,
            message
        });

        return compliment;
    }
}

module.exports = new CreateComplimentService();