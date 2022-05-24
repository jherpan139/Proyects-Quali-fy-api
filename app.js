const express = require('express')
const app = express()
const sequelize = require('./database/db')
const courseRoutes = require('./routes/courses/courses')
const userRoutes = require('./routes/users/index')

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req,res) => {
    res.send('Hello world!')  });

app.use('/api/courses', courseRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

    sequelize.sync({force: false}).then(() => {
        console.log('Connected to the database')
    }).catch((err) => {
        console.log(err)
    })
})

