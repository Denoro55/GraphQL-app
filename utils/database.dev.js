const Sequelize = require('sequelize');

const DB_SCHEMA_NAME = 'node-todo';
const DB_USER_NAME = 'root';
const DB_USER_PASSWORD = '12345678';

const sequelize = new Sequelize(DB_SCHEMA_NAME, DB_USER_NAME, DB_USER_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
