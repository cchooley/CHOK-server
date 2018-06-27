const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10

function hashPassword(password) {
    return bcrypt.hashSync(password, saltRounds)
}

function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

function createJWT(user) {
    return jwt.sign({userId: user.id}, process.env.TOKEN_SECRET)
}

module.exports = {
    hashPassword,
    comparePassword,
    createJWT
}