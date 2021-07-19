const { Sequelize } = require('sequelize');
const dbconfig = require('./database.config');

const sequelizeConection = new Sequelize(dbconfig);

const User = require('./../models/User');
const Tag = require('./../models/Tag');

const Models = [User, Tag];

Models.forEach((model) => model.init(sequelizeConection));

