const asyncCatch = require("./../../utils/catchAsync");
const { create, read,update,remove } = require("../../services/payment/payment.service");

exports.create = asyncCatch(async (req, res, err) => {
    const {plan}=req.body;
    const {user_id}=req;
    const result = await create(plan,user_id);
    return res.status(200).json({
        status: true,
        message: "success",
        result: result,
    });
});

exports.read = asyncCatch(async (req, res, err) => {
    const {user_id}=req;
    const result = await read(user_id);
    return res.status(200).json({
        status: true,
        message: "success",
        result: result,
    });
});

exports.update = asyncCatch(async (req, res, err) => {
    const {payment_id,plan,status,url}=req.body;
    const {user_id}=req;
    const result = await update(payment_id,plan,status,url,user_id);
    return res.status(200).json({
        status: true,
        message: "success",
        result: result,
    });
});

exports.remove = asyncCatch(async (req, res, err) => {
    const {payment_id}=req.body;
    const {user_id}=req;
    const result = await remove(payment_id,user_id);
    return res.status(200).json({
        status: true,
        message: "success",
        result: result,
    });
});
