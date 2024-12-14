require('dotenv').config()
const config = require('./config')

const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const app = express()

// Controllers
const authController = require('./src/controllers/authController')

// Connection to the DB
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('[Success] Connected to DB')
        app.listen(config.PORT, () => {
            console.log(`[Success] Server is running on port: ${config.PORT}`)
        })
    }).catch(err => console.log(err))

app.use(cors())

app.use(authController)