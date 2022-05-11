const mongoose=require('mongoose');
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const  jwt=require('jsonwebtoken');
const  config=require('config');
const speakeasy = require('speakeasy');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        enum:['basic','admin'],
        default:'basic',
    },
    twoFactorTempSecret:{
        type:String,
    },
    payments:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Payment'
    }],
    date : {type :Date,default : Date.now()}
});
userSchema.methods.generateAccessToken=function(){
    return jwt.sign({_id: this._id,role:this.role}, config.get('jwt_private_key_access_token'),{ expiresIn: '24h' });
};
userSchema.methods.generateOtp=function(){
    return speakeasy.totp({
        secret: this.twoFactorTempSecret,
        window: 10,
        digits:5,
        encoding: 'base32'
    });
};
userSchema.methods.verifyOTP=function(code){
    return speakeasy.totp.verify({
        secret: this.twoFactorTempSecret,
        encoding: 'base32',
        window : 10,
        digits:5,
        token: code
    });
};

exports.User = mongoose.model('User', userSchema);

