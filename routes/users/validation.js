const { body, header, param } = require('express-validator')
const checkValidationSchema = require('../../middleware/checkValidationSchema')

const createUserValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
    header('Authorization', 'Authorization not correct').exists(),
    body('name', 'name must not be empty').notEmpty().isString(),
    body('surnames', 'surnames must not be empty').notEmpty().isString(),
    body('email', 'email must be formatted correctly').isEmail(),
    body('password', 'password must be string and at least 8 length').isString().isLength( {min: 8}),
    body('role', 'role not correct').optional().isInt({min: 0, max: 1})
]

const loginUserValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
    body('email', 'email must be formatted correctly').isEmail(),
    body('password', 'password must be string and at least 8 length').isString().isLength( {min: 8}),
]

const verifyTokenValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
    header('Authorization', 'Authorization not correct').exists(),
]

const findByIdValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
    header('Authorization', 'Authorization not correct').exists(),
    param('id', 'id must exist and be numeric').exists().isInt(),
]

const validations = {
    createUser: [createUserValidation, checkValidationSchema],
    loginUser: [loginUserValidation, checkValidationSchema],
    verifyToken: [verifyTokenValidation, checkValidationSchema],
    findById: [findByIdValidation, checkValidationSchema]
}

module.exports = validations