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
    surnames: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    final_grade: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    idCourse: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { timestamps: false })

module.exports = StudentModel
