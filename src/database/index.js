const { Sequelize } = require('sequelize');
const dbconfig = require('./database.config');

const sequelizeConection = new Sequelize(dbconfig);

const User = require('./../models/User');
const Tag = require('./../models/Tag');
const Compliment = require('./../models/Compliment');

const models = [User, Tag, Compliment];

models.forEach((model) => model.init(sequelizeConection));
models.forEach((model) => model.associate && model.associate(sequelizeConection.models));
