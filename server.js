// imports from diffrent libs and from the node-modules
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport')
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const config = require('./api/config/db');
const auth = require('./api/auth/auth');
const middlewear = require('./api/auth/middlewear')
const app = express();

app.use(express.json());

// setting up the mongodb with the help of mongoose 
mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database is connected');
  })
  .catch(err => {
    console.log({ database_error: err });
});

// render the html using ejs 
app.use(expressLayouts);
app.set('view engine', 'ejs');
// setting ./public/views as the default dir of ejs files 
app.set('views', path.join('public', 'views'));

// declaring static dir for CSS files 
app.use('/style', express.static('/public' + '/style'))

app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => {
//     console.log('all good');
//     res.status(200).json('hi there we are up and running.');
// });

// setting up the diffrent routes from the routes folder and some authentication functions to check permission 
const router = {
  user: require('./api/routes/user'),
  appointment: require('./api/routes/appointment'),
  client: require('./api/routes/client'),
  login: require('./api/routes/login'),
  index: require('./api/routes/index')
};

app.use('/client', middlewear, auth.loginAuth, router.client);
app.use('/appointment', middlewear, auth.loginAuth, router.appointment);
app.use('/user', middlewear, auth.loginAuth, router.user); 
app.use('/', router.login); 
app.use('/', router.index);

app.listen(3000, () => {
    console.log('server is running on localhost:3000');
});