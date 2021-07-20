const User = require('../models/User');
const bcrypt = require('bcryptjs');

class CreateUserService{
    async execute({name, email, admin, password}) {
        if (!name) throw new Error(['Name is required', 400]);
        if (!email) throw new Error(['Email is required', 400]);
        if (!password) throw new Error(['Password is required', 400]);

        if (name?.length < 2 || name?.length > 50) throw new Error(['The name must have at least 2 characters and a maximum of 50 characters', 400]);
        if (password?.length < 8 || password?.length > 50) throw new Error (['The password must have between 8 and 50 characters', 400]);
        
        const userAlreadyExists = await User.findOne({ where: { email: email } });
        if (userAlreadyExists) throw new Error(['The user already exists', 400]);

        const hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword)
        const newUser = {name, email, admin, password: hashedPassword};
        await User.create(newUser);
        return {name, email, admin, password};
    }
};

module.exports = new CreateUserService();