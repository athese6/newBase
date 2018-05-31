// require('ignore-styles');
// require('url-loader');
// require('file-loader');
// require('babel-register')({
//     ignore: [/(node_modules)/],
//     presets: ['es2015', 'stage-1', 'react-app'],
//     plugins: [
//         'transform-decorators-legacy',
//         'syntax-dynamic-import',
//         'dynamic-import-node',
//         'react-loadable/babel'
//     ]
// });
// const indexController = require("./controllers");

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('../config/config.js');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// config.express(app);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/', express.static('public'));
app.use('/', express.static('build_dev'));
// other static resources should just be served as they are
// router.use(express.static(
//     path.resolve(__dirname, '..', '..', 'build'),
//     {maxAge: '30d'},
// ));


// app.use('/', indexController);

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/api/hello', (req, res) => {
    res.send({express: 'Hello From Express213'});
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
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
