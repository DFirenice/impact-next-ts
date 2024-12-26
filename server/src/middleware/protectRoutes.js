// JWT Auth protection using access tokens
// Supposed from frontend to have axios interceptor for making
// Header: Authorization requests

const jwt = require('jsonwebtoken')

const protectRoutes = (req, res, next) => {
    const authHeader = req.headers.authorization
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: 'Unauthorized, no token provided!' })
    }
    
    // Token, separate from 'Bearer'
    const token = authHeader.split(' ')[1]

    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY)
        next()
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized, invalid token!' })
    }
}

module.exports = protectRoutes