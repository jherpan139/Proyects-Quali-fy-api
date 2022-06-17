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
app.use('/api/courseUser', course_userRoutes)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

    sequelize.sync({force: false}).then(() => {
        console.log('Connected to the database')
    })
    
})

