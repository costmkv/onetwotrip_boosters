const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { MongoManager } = require('./src/mongo');

const config = require('./config');

const api = require('./src/api');

const app = express();
const mongoManager = new MongoManager(config.mongo);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoManager.connect();

app.use('/api/', api(config));

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({error: err.message});
});

module.exports = app;
