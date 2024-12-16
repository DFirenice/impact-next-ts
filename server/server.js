require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

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

app.post('/verify', (req, res) => {
    const token = req.cookies.jwt

    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
        if (!err) { return res.status(200).send({ verified: true }) }
        return res.status(401).send({
            verified: false,
            validation_err: err
        })
    })
})