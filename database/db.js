const { Sequelize } = require('sequelize')
const { database } = require('./config')

const sequelize = new Sequelize(database.database, database.username, database.password, {
    host: database.host,
    port: 33060,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false
})

module.exports = sequelize;