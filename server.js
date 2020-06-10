// imports from diffrent libs and from the node-modules
const express = require('express');
// mogodb data modeling and configuring 
const mongoose = require('mongoose');
// creating a session for the user when they login
const session = require('express-session');
const cookieParser = require('cookie-parser');
// rendering the ejs files as dynamic htmls
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
// path for the database
const config = require('./api/config/db');
// auth and middlewear app to check the auththentication 
const auth = require('./api/auth/auth');
const middlewear = require('./api/auth/middlewear')
const app = express();

// setting the request files to be read as json
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

// // setting up session and cookieParser
app.use(cookieParser());
app.use(session({ secret: 'session password', resave: false, saveUninitialized: false }));


// render the html using ejs 
app.use(expressLayouts);
app.set('view engine', 'ejs');
// setting ./public/views as the default dir of ejs files 
app.set('views', path.join('public', 'views'));

// declaring static dir for CSS files 
app.use('/style', express.static('/public' + '/style'))

app.use(express.urlencoded({ extended: true }));

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