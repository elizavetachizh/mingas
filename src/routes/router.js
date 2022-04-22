const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const config = require('config');

const PORT = config.get('port') || 5000;
// //
const app = express();
//
app.use('/api/management/id', require('./routers'));
//
async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`listening port ${PORT}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
start();
