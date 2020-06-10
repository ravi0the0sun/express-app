// donot touch this login auth.
// Authtentication function for user permission
exports.loginAuth = async (req, res, next) => {
    if (!req.user){
        req.session.error = 'Not Logged In';
        return res.status(403).redirect('./login');
    };
    return next();
};
