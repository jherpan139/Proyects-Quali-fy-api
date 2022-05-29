const { body, header } = require('express-validator')
const checkValidationSchema = require('../../middleware/checkValidationSchema')

const createUserValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
    body('name', 'name must not be empty').notEmpty().isString(),
    body('surnames', 'surnames must not be empty').notEmpty().isString(),
    body('email', 'email must be formatted correctly').isEmail(),
    body('password', 'password must be string and at least 8 length').isString().isLength( {min: 8}),
    body('role', 'role not correct').optional().isInt({min: 0, max: 2})
]

const validations = {
    createUser: [createUserValidation, checkValidationSchema],
}

module.exports = validations