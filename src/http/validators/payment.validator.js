const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
function validateCreate(data) {
    const schema = Joi.object({
        plan: Joi.number().required(),
        access: Joi.string().valid('any', 'own'),
    });
    return schema.validate(data);
}
function validateUpdate(data) {
    const schema = Joi.object({
        plan: Joi.number().required(),
        payment_id: Joi.objectId().required(),
        url: Joi.string().required(),
        status: Joi.string().valid('pending', 'successful','failed'),
        access: Joi.string().valid('any', 'own'),
    });
    return schema.validate(data);
}
function validateDelete(data) {
    const schema = Joi.object({
        url: Joi.uri().required(),
        access: Joi.string().valid('any', 'own'),
    });
    return schema.validate(data);
}
function validateRead(data) {
    const schema = Joi.object({
        access: Joi.string().valid('any', 'own'),
    });
    return schema.validate(data);
}
module.exports.validateCreate=validateCreate
module.exports.validateUpdate=validateUpdate
module.exports.validateDelete=validateDelete
module.exports.validateRead=validateRead
