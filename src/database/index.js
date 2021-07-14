const { Sequelize } = require('sequelize');
const dbconfig = require('./database.config');

const sequelize = new Sequelize(dbconfig);

module.exports = sequelize;