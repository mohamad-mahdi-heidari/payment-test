const asyncCatch = require("./../../utils/catchAsync");
const { verifyCode, generateCode } = require("../../services/user/user.service");

exports.code = asyncCatch(async (req, res, err) => {
    const {username,password,code}=req.body;
    const result = await verifyCode(username,password,code);
    return res.status(200).json({
        status: true,
        message: "success",
        result: result,
    });
});
exports.login = asyncCatch(async (req, res, err) => {
    const {username,password,role}=req.body;
    const result = await generateCode(username,password,role);
    return res.status(200).json({
        status: true,
        message: "success",
        result: result,
    });
});
