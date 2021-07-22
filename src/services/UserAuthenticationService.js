const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class UserAuthenticationService {
    async execute({email, password}) {
        if (!email) throw new Error (['Email is required', 400]);
        if (!password) throw new Error (['Password is required', 400]);

        const user = await User.findOne({where: { email }});
        if (!user) throw new Error (['Email or password incorrect', 400]);
        const passwordsMatch = await bcrypt.compare(password, user.password); 
        if (!passwordsMatch) throw new Error (['Email or Password incorrect', 400]);
        const token = jwt.sign(
            { email }, 
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '1 day',
            } 
        );

        return token;
    }
}

module.exports = new UserAuthenticationService()