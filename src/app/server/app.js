const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const PointOfInterest = require('../models/PointOfInterest');
const routes = require('../routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use('/', routes);

module.exports = app;