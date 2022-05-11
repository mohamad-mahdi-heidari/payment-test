const mongoose=require('mongoose');
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const paymentSchema=new mongoose.Schema({
    url:{
        type:String,
    },
    status:{
        type:String,
        enum:['pending','successful','failed'],
        default:'pending',
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    plan:{
        type:Number,
    },
    date : {type :Date,default : Date.now()}
});

exports.Payment = mongoose.model('Payment', paymentSchema);



