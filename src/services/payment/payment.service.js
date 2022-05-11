const config = require('config');
const AppError=require('./../error/error.class')
const {Payment} = require("./../../models/payment.model");
const {User} = require("./../../models/user.model");
const create = async (plan,user_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const payment = await Payment.create({
                user:user_id,
                plan:plan,
                url:"https://testpayment.com/callback",
            });
            const user=await User.findById(user_id);
            user.payments.push(payment);
            await user.save();
            resolve(payment);
        } catch (error) {
            return reject(error);
        }
    });

};
const read = async (user_id,access) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (access==='any'){
                const payments = await Payment.find();
                resolve(payments);
            }else{
                const payments = await Payment.find({
                    user:user_id,
                });
                resolve(payments);
            }

        } catch (error) {
            return reject(error);
        }
    });

};
const update = async (payment_id,plan,status,url,user_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const payment = await Payment.findOneAndUpdate({
                _id:payment_id,
                user:user_id,
            },{
                plan,
                status,
                url,
            });
            resolve(!!payment);
        } catch (error) {
            return reject(error);
        }
    });


};
const remove = async (payment_id,user_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const payment = await Payment.findOneAndDelete({
                _id:payment_id,
                user:user_id
            });
            resolve(!!payment);
        } catch (error) {
            return reject(error);
        }
    });


};

module.exports = {
    create,
    read,
    update,
    remove,
};
