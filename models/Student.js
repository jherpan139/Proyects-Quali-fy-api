const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const StudentModel = sequelize.define('student',{
    idStudent: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false })

module.exports = StudentModel
