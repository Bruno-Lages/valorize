const User = require('../models/User');

class CreateUSerService{
    async execute({name, email, admin}) {
        if (!email) throw new Error('Email is required');
        const userAlreadyExists = await User.findOne({ where: { email: email } });
        if (userAlreadyExists) throw new Error('The user already exists');
        const newUser = {name, email, admin};
        User.create(newUser);
        return newUser;
    }
};

module.exports = new CreateUSerService();