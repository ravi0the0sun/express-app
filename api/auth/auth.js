// donot touch this login auth.
exports.loginAuth = async (req, res, next) => {
    if (req.user == undefined){
        return res.status(403).send('Not logged in!!!');
    };
    next();
};

