require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const cors = require('cors')
const app = express()

// Routes
const authRouter = require('./src/routes/authRouter')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(authRouter)

// Connection to the DB
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('[Success] Connected to DB')
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`[Success] Server is running on port: ${process.env.SERVER_PORT}`)
        })
}).catch(err => console.log(err))