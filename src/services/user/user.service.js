const {User} = require("./../../models/user.model");
const config = require('config');
const AppError=require('./../error/error.class')
const authDebug = require('debug')('app:auth');
const speakeasy = require('speakeasy');
const generateCode = async (username,password,role) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userDb = await User.findOne({username});
            if (!!userDb) {
                if (password!==userDb.password) throw new AppError("invalid username or password",400);
                resolve({code:userDb.generateOtp()});
            }else{
                const user = new User({
                    username,
                    password,
                    role,
                });
                user.twoFactorTempSecret = speakeasy.generateSecret().base32;
                await user.save();
                resolve({code:user.generateOtp()});
            }

        } catch (error) {
            return reject(error);
        }
    });

};
const verifyCode = async (username,password,code) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userDb = await User.findOne({username,password});
            if (!userDb) throw new AppError("invalid username or password",403);
            const verified = userDb.verifyOTP(code);
            if (!verified)  throw new AppError("invalid otp code",403);
             resolve({auth_token:userDb.generateAccessToken()});
        } catch (error) {
            return reject(error);
        }
    });

};

module.exports = {
    generateCode,
    verifyCode
};
