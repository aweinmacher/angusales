var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var api = require('./routes/api.js');
var customers = require('./routes/customers.js');
var companies = require('./routes/companies.js');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
// app.get('/api', function(req, res) { app.use('hello world'); });
app.use('/api', api); // to replace with two files
// app.use('/api/customers', customers);
// app.use('/api/companies', companies);

// Catch all other routes and return the index file
app.get('*', function(req, res) { res.sendFile(path.join(__dirname, 'dist/index.html')); });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;