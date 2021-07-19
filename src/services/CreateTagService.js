const Tag = require('./../models/Tag');

class CreateTagService {
    async execute({name}) {
        if (!name) throw new Error('Invalid name');
        const existentTag = await Tag.findOne({ where: { name: name } });
        if (existentTag) throw new Error('Tag already exists');
        const tag = { name };
        Tag.create( tag )
        return tag;
    }
}

module.exports = new CreateTagService();