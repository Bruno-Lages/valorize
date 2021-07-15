const { Sequelize } = require('sequelize');
const dbconfig = require('./database.config');

const sequelizeConection = new Sequelize(dbconfig);

const User = require('./../models/User');
const models = [ User ];
User.init(sequelizeConection);

models.forEach((model) => model.associate && model.associate(connection.models));