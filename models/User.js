const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')
const bcrypt = require('bcryptjs')

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
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //0 eq normal user, 1 eq admin
    role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
}, { timestamps: false })

UserModel.prototype.isValidPassword = async function(password){
    const user = this
    const compare = await bcrypt.compare(password, user.password)
    return compare
}


module.exports = UserModel
