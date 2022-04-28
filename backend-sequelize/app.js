var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mapelRouter = require('./routes/mapel')

var app = express();
// enabling cors for all requests by using cors middleware.
app.use(
    cors({
      credentials: true,
      origin: (req, cb) => {
        // allow from anywhere
        cb(null, true);
      },
    })
  );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mapel', mapelRouter)

module.exports = app;