const User = require('../models/User');

class CreateUserService{
    async execute({name, email, admin}) {
        if (!name) throw new Error(['Name is required', 400]);
        if (name?.length < 2 || name?.length > 50) throw new Error(['The name must have at least 2 characters and a maximum of 50 characters', 400]);
        if (!email) throw new Error(['Email is required', 400]);
        const userAlreadyExists = await User.findOne({ where: { email: email } });
        if (userAlreadyExists) throw new Error(['The user already exists', 400]);
        const newUser = {name, email, admin};
        await User.create(newUser);
        return newUser;
    }
};

module.exports = new CreateUserService();