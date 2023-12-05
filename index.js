const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const compression = require('compression');
require('dotenv').config();

global.__basedir = __dirname;

//middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

// use it before all route definitions
app.use(cors({ origin: '*' }));

//routes
app.use(require('./src/routes/index'));

app.listen(process.env.PORT || 4000);
console.log('Server listening port: ', process.env.PORT || 4000);