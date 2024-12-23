const jwt = require('jsonwebtoken')

// Access token
const genAccessToken = (id) => {
    return jwt.sign(
        { id }, process.env.JWT_SECRET_KEY,
        { expiresIn: '15m' }
    )
}

// Refresh token
const genRefreshToken = (id) => {
    return jwt.sign(
        { id }, process.env.JWT_REFRESH_SECRET_KEY,
        { expiresIn: '7d' }
    )
}

module.exports = { genAccessToken, genRefreshToken }