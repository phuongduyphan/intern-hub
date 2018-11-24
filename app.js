const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const usersApiRouter = require('./routes/users-api');
const categoriesApiRouter = require('./routes/categories-api');
const skillsApiRouter = require('./routes/skills-api');
const jobsApiRouter = require('./routes/jobs-api');
const recruitersApiRouter = require('./routes/recruiters-api');
const studentsApiRouter = require('./routes/students-api');

const app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport config
app.use(passport.initialize());
require('./config/passport/passport-config')(passport);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/users', usersApiRouter);
app.use('/api/categories', categoriesApiRouter);
app.use('/api/skills', skillsApiRouter);
app.use('/api/jobs', jobsApiRouter);
app.use('/api/recruiters', recruitersApiRouter);
app.use('/api/students', studentsApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Node.js listening on ${process.env.PORT || 5000} ...`);
});

module.exports = app;
