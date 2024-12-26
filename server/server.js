require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

// Middlewares
const cookieParser = require('cookie-parser')
const protectRoutes = require('./src/middleware/protectRoutes')
const cors = require('cors')

// Instances
const app = express()

// Routes
const authRouter = require('./src/routes/authRouter')
const userRouter = require('./src/routes/userRouter')

// Utils
const { genAccessToken, genRefreshToken } = require('./src/utils/genTokens')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: false
}))

app.use('/auth', authRouter)

// Connection to the DB
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('[Success] Connected to DB')
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`[Success] Server is running on port: ${process.env.SERVER_PORT}`)
        })
}).catch(err => console.log(err))

// Refresh token validation
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

// Routes protection: authenticated requests only,
// See comments in middleware/protectRoutes.js
app.use('/api', protectRoutes)
app.use('/api', userRouter)