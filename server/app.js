var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var schedule = require('./includes/job-schedule.js').setup();
/*
 schedule.jobs({name: 'show message'}, function(err, jobs) {
 // Work with jobs (see below)
 console.log(jobs);
 });*/

function graceful() {
    schedule.stop(function () {
        process.exit(0);
    });
}
process.on('SIGTERM', graceful);
process.on('SIGINT', graceful);

var app = express();
//
var io = require('socket.io').listen(app.listen(3000));

require('./sockets/base')(io);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());
app.use(cookieParser());
require('./router')(app);
/**
 * Development Settings
 */
if (app.get('env') === 'development') {
  // This will change in production since we'll be using the dist folder
  app.use(express.static(path.join(__dirname, '../client')));
  // This covers serving up the index page
  app.use(express.static(path.join(__dirname, '../client/.tmp')));
  app.use(express.static(path.join(__dirname, '../client/app')));
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {
  // changes it to use the optimized version for production
  app.use(express.static(path.join(__dirname, '/dist')));

}

/**
 * Routes
 */


// Error Handling
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

module.exports = app;
