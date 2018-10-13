var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./helpers/db');
var httpHelper = require('./helpers/http');

var appConfig = require('./config/config.json');

process.title="fsTrainingNodeApi";

var app = express();

app.use(httpHelper.enableCORS);

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

app.use(cookieParser());

//Routes
var authRoute = require('./routes/authRoute');
var userRoute = require('./routes/userRoute');

app.use('/v1/fstraining/api/auth', authRoute);
app.use('/v1/fstraining/api/user', userRoute);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//production error handler
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.send(err);
});

db.connect(() => {
    var server = app.listen(appConfig.api.bindPort, appConfig.api.bindAddress, () => {
        console.log ("Full-stack Training API Server listening on "+ appConfig.api.bindAddress+ ":", appConfig.api.bindPort);
    })
});
