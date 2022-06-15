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
    final_grade: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: 1,
            max: 10
        }
    },
    overall_comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    presentation_grade: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 3
        }
    },
    presentation_comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    documentation_grade: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 2
        }
    },
    documentation_comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    demonstration_grade: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 3
        }
    },
    demonstration_comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    questions_grade: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 1
        }
    },
    questions_comment: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    ,
    research_grade: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 1
        }
    },
    research_comment: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { timestamps: false })

module.exports = GradeModel
