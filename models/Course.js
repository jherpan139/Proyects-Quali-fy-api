const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const CourseModel = sequelize.define('course',{
    idCourse: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, { timestamps: false })

module.exports = CourseModel
