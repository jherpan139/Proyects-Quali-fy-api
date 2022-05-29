const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')
const User = require('./User')
const Student = require('./Student')

const GradeModel = sequelize.define('grade',{
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: User,
            key: 'idUser'
        }
    },
    idStudent: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Student,
            key: 'idStudent'
        }
    },
    grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
}, { timestamps: false })

module.exports = GradeModel
