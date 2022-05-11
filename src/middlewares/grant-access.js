const AppError=require('./../services/error/error.class')
exports.grantAccess = function ( resource, roles) {
    return async (req, res, next) => {
        let action;
        if (req.method==='POST') action='create';
        else if (req.method==='PUT') action='update';
        else if (req.method==='DELETE') action='delete';
        else if (req.method==='GET') action='read';
            try {
                const permissionAny = roles.can(req.role)[action + 'Any'](resource);
                if (!permissionAny.granted) {
                    try {
                        const permissionOwn = roles.can(req.role)[action + 'Own'](resource);
                        if (!permissionOwn.granted) {
                            next(new AppError("access denied",403));
                        }else{
                            if (req.method==='GET'||req.method==='DELETE'){
                                req.query.access='own';
                            }else{
                                req.body.access='own'
                            }
                            next();
                        }
                    } catch (error) {
                        return next(new AppError("access denied",403));

                    }
                } else {
                    if (req.method==='GET'||req.method==='DELETE'){
                        req.query.access='any';
                    }else{
                        req.body.access='any'
                    }
                    next()
                }
            } catch (error) {
                next(new AppError("access denied",403));

            }
    }
}
