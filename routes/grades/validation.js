const { body, header } = require('express-validator')
const checkValidationSchema = require('../../middleware/checkValidationSchema')

const createGradeValidation = [
    header('Accept-version', 'accept-version not correct').exists(),
    body('idStudent', 'idStudent must not be empty').notEmpty().isInt(),
    body('idTeacher', 'idTeacher must not be empty').notEmpty().isInt(),
    body('final_grade', 'final_grade must not be empty, gt 0 and lt 10').notEmpty().isInt({ gt: 0, lt: 11 })
]

const validations = {
    createGrade: [createGradeValidation, checkValidationSchema],
}

module.exports = validations