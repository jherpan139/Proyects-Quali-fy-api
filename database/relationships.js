const User = require('../models/User')
const Student = require('../models/Student')
const Course = require('../models/Course')
const Grade = require('../models/Grade')
const Course_user = require('../models/Course_User')


//Many to many relationships

User.belongsToMany(Student, {through: Grade, foreignKey: 'idUser'})
Student.belongsToMany(User, {through: Grade, foreignKey: 'idStudent'})

User.belongsToMany(Course, {through: Course_user, foreignKey: 'idUser'})
Course.belongsToMany(User, {through: Course_user, foreignKey: 'idCourse'})

//One to many relationships

Course.hasMany(Student, {as: 'students', foreignKey: 'idCourse'})
Student.belongsTo(Course, {foreignKey: 'idCourse'})
