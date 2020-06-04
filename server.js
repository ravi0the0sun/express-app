const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/db');
const auth = require('./api/auth/auth');
const middlewear = require('./api/auth/middlewear')
const app = express();

app.use(express.json());
mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });

app.get('/', (req, res) => {
    console.log('all good');
    res.status(200).json('hi there we are up and running.');
});

const router = {
  user: require('./api/routes/user'),
  appointment: require('./api/routes/appointment'),
  client: require('./api/routes/client')
}
app.use('/client', middlewear, auth.loginAuth, router.client);
app.use('/appointment', middlewear, auth.loginAuth, router.appointment);
app.use('/user', middlewear, auth.loginAuth, router.user);  

app.listen(3000, () => {
    console.log('server is running on localhost:3000');
});