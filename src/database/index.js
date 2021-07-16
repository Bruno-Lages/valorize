const { Sequelize } = require('sequelize');
const dbconfig = require('./database.config');

const sequelizeConection = new Sequelize(dbconfig);

const User = require('./../models/User');
User.init(sequelizeConection);

