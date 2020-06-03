const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const config = require('./config/db');
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

const user = require('./api/routes/user')
const appointment = require('./api/routes/appointment');
const client = require('./api/routes/client');

app.use('/client', client);
app.use('/appointment', appointment);
app.use('/user', user);  

app.listen(3000, () => {
    console.log('server is running on localhost:3000');
});