var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const siswaRouter = require('./routes/siswa')
const guruRouter = require('./routes/guru')

var app = express();

app.use(logger('dev'));
// parse request dari content type: application/json (parse data)
app.use(bodyParser.json())
// body parser request content type: application/x-www-form.urlencoded.
app.use(bodyParser.urlencoded({extended:false}))
// parse request content type: application/json. parse incoming rrequest dengan json payloads.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/images/guru')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/siswa', siswaRouter);
app.use('/guru', guruRouter);

module.exports = app;