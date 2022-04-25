const express = require('express');
const fs = require('fs');
const path = require('path');
const csrf = require('csurf');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const defaultKeys = require('../config/default');

const PORT = process.env.PORT || defaultKeys.PORT;

// //
const app = express();

// const https = require('https').Server(options, app);

app.set('views', path.join(__dirname, 'views'));
//
app.use('/api/management/id', require('./routers'));
//
async function start() {
  try {
    await mongoose.connect(defaultKeys.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`listening port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
start();
