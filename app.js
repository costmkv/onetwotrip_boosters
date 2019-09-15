const express = require('express');
const { requestLogger } = require('./src/middleware');

const cookieParser = require('cookie-parser');
const { MongoManager } = require('./src/mongo');

const config = require('./config');

const api = require('./src/api');

const app = express();
const mongoManager = new MongoManager(config.mongo);

app.use(requestLogger());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoManager.connect();

app.use('/api/', api(config));

module.exports = app;
