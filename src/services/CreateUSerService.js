const User = require('../models/User');

class CreateUSerService{
    async execute({name, email, admin}) {
        if (!name) throw new Error('Name is required');
        if (name?.length < 2 || name?.length > 50) throw new Error('The name must have at least 2 characters and a maximum of 50 characters');
        if (!email) throw new Error('Email is required');
        const userAlreadyExists = await User.findOne({ where: { email: email } });
        if (userAlreadyExists) throw new Error('The user already exists');
        const newUser = {name, email, admin};
        await User.create(newUser);
        return newUser;
    }
};

module.exports = new CreateUSerService();