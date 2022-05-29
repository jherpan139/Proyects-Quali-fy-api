const express = require('express')
const app = express()
const sequelize = require('./database/db')
const passport = require('passport')
const cors = require('cors')
require('./database/relationships')
require('dotenv').config()
//Routes
const courseRoutes = require('./routes/courses/index')
const userRoutes = require('./routes/users/index')
const studentRoutes = require('./routes/students/index')
const gradesRoutes = require('./routes/grades/index')
const course_userRoutes = require('./routes/course_user/index')

//pruebas
const UserModel = require('./models/User')
const StudentModel = require('./models/Student')
const CourseModel = require('./models/Course')

const users = [
    { name: "Jorge", surnames: "Hernandez", email: 'jorge@gmail.com', password: '12345678', role: 2},
    { name: "Maria", surnames: "Ortiz", email: 'maria@gmail.com', password: '12345678', role: 1},
    { name: "Miguel", surnames: "Sánchez", email: 'miguel@gmail.com', password: '12345678'},
]

const courses = [
    { name: "2 DAM B"},
    { name: "2 DAM A"},
    { name: "2 DAW B"},
]

const students = [
    { name: 'Juan', dni: '4356234L', email: 'juan@gmail.com', idCourse: 2},
    { name: 'Lucia', dni: '3245345A', email: 'lucia@gmail.com', idCourse: 1},
    { name: 'Myriam', dni: '3453424B', email: 'emilia@gmail.com', idCourse: 1},
]


const PORT = process.env.PORT || 3000;

app.use(passport.initialize())

require('./auth/auth')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.get('/', (req,res) => {
    res.send('Hello world!')  });

app.use('/api/courses', courseRoutes)
app.use('/api/users', userRoutes)
app.use('/api/students', studentRoutes)
app.use('/api/grades', gradesRoutes)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

    sequelize.sync({force: true}).then(() => {
        console.log('Connected to the database')
    }).then(() => {
        users.forEach(user => UserModel.create(user))
    }).then(() => {
        courses.forEach(course => CourseModel.create(course))
    }).then(() => {
        students.forEach(student => StudentModel.create(student))
    })
    
})

