const Sequelize = require('sequelize');

const DB_SCHEMA_NAME = process.env.DB_SCHEMA_NAME;
const DB_USER_NAME = process.env.DB_USER_NAME;
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD;
const DB_HOST = process.env.DB_HOST;

const sequelize = new Sequelize(DB_SCHEMA_NAME, DB_USER_NAME, DB_USER_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;
