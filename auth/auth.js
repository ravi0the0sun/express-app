const User = require('../api/models/User')

exports.loginAuth = async (req, res, next) => {
   try {
       const userId = req.body.userId;
       console.log(userId);
       const user = await User.findById(userId);
       console.log(user);
        if (userId != user._id){
            return res.status(403).send('Not logged in!!!');
        };
        next();
   } catch(err) {
       res.status(500).json(err);
   };
};

