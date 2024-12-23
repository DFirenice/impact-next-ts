require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const cors = require('cors')
const app = express()

// Routes
const authRouter = require('./src/routes/api/authRouter')

// Utils
const { genAccessToken, genRefreshToken } = require('./src/utils/genTokens')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use('/api/auth', authRouter)

// Connection to the DB
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('[Success] Connected to DB')
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`[Success] Server is running on port: ${process.env.SERVER_PORT}`)
        })
}).catch(err => console.log(err))

// Private routes protection (old)
app.post('/api/verify', (req, res) => {
    const token = req.cookies.jwt

    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
        if (!err) { return res.status(200).send({ verified: true }) }
        return res.status(401).send({
            verified: false,
            validation_err: err
        })
    })
})

// JWT Refresh token validation

// LATER TO-DO: PUT GENERATION FUNCS INTO UTILS FOLDER
// ALONGSIDE ONE IN authController.js

app.post('/refresh-token', (req, res) => {
    const refreshToken = req.body.token

    if (!refreshToken) return res.status(403).json({ message: 'Refresh token required!' })

    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY)
        const accessToken = genAccessToken(decoded.id)
        const newRefreshToken = genRefreshToken(decoded.id)
        res.json({ accessToken, refreshToken: newRefreshToken })
    }
    
    catch (err) { res.status(403).json({ message: 'Refresh token invalid or expired!' }) }
})