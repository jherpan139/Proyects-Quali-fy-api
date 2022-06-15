const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')
const User = require('./User')
const Course = require('./Course')

const Course_UserModel = sequelize.define('courses_user',{
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: User,
            key: 'idUser'
        }
    },
    idCourse: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Course,
            key: 'idCourse'
        }
    },
    //0 eq teacher, 1 eq tutor.
    role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
}, { timestamps: false })

module.exports = Course_UserModel
