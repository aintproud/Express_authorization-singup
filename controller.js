const Router = require('express')
const router = new Router()
const service = require('./service')
const {check} = require('express-validator')

// POST recieving, validation of sent data

router.post('/registration', [
    check('username', "Say no to gaps)").notEmpty(),
    check('password', "Password is not 3-4 length").isLength({min:3, max:4})
], service.registration)
router.post('/login', service.login)

module.exports = router