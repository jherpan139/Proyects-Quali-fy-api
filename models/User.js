const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const UserModel = sequelize.define('user',{
    idUser: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surnames: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //0 == teacher, 1 == tutor, 2 == admin
    role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
})

module.exports = UserModel
