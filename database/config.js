require('dotenv').config()

module.exports = {

    database: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'root',
        database: process.env.DB_DATABASE || 'qualify_proyects',
        host: process.env.DB_HOST || 'localhost'
    }
}