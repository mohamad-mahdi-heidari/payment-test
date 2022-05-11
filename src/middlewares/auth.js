const jwt=require('jsonwebtoken');
const config=require('config');
const AppError=require('./../services/error/error.class')
async function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) next(new AppError("token required",401));
    try {
        const decoded = jwt.verify(token, config.get('jwt_private_key_access_token'));
        req.user_id = decoded._id;
        req.role = decoded.role;
        next();
    }
    catch (e) {
        next(new AppError("Unauthorized",401));
    }
}
module.exports=auth;
