const { response } = require('express');
const User = require('../models/User');

module.exports = async (request, response, next) => {
    const { user_id } = request;

    const { admin } = await User.findOne({where: {id: user_id}});

    if(!admin) throw new Error(['access denied', 401]);

    next();
}