const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');

const imageRouter = require('./routes/images');

const app = express();

mongoose.connect('mongodb://localhost:27017/images', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB: ', err));

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  // app.use(bodyParser.join());
  app.use(cors());

  app.use('images', imageRouter);

  app.use((req , res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err : {},
    });
  });

  module.exports = app;