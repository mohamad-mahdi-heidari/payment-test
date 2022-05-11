const Joi = require('@hapi/joi');
const ObjectId = require('mongoose').Types.ObjectId;
Joi.objectId = require('joi-objectid')(Joi);
function validateLogin(data) {
    const schema = Joi.object({
        access: Joi.string().valid('any', 'own'),
        password: Joi.string().required(),
        role: Joi.string().valid('admin','basic').required(),
        username: Joi.string().required(),
    });
    return schema.validate(data);
}
function validateCode(data) {
    const schema = Joi.object({
        access: Joi.string().valid('any', 'own'),
        password: Joi.string().required(),
        username: Joi.string().required(),
        code: Joi.number().required(),
    });
    return schema.validate(data);
}
module.exports.validateLogin=validateLogin
module.exports.validateCode=validateCode
