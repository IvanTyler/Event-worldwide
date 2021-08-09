const express = require('express')
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const redis = require('redis');
let RedisStore = require('connect-redis')(session);
let RedisClient = redis.createClient();
const cookieSession = require('cookie-session');




// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');
const signUpRouter = require('./routes/signUp')
const signInRouter = require('./routes/signIn');
const subscribesRouter = require('./routes/subscribes')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(cors(
  {
  origin: true,
  credentials: true,
}
));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('trust proxy', 1);
app.use(cookieSession({
  name: 'sId',
  keys:['key1', 'key2'],
  // cookie: { secure: true, sameSite: 'strict' },
  // httpOnly: true,
}))
app.use(
  session({
    name: 'sId',
    store: new RedisStore({client: RedisClient}), 
    saveUninitialized: false,
    secret: 'abraradabra',
    resave: false,
    httpOnly: true,
    domain: 'ikiro.ru',
    proxy: true,
    cookie: { secure: true, sameSite: 'none' },
  })
);
app.use('/api', apiRouter);
app.use('/users', usersRouter);
app.use('/api/signup', signUpRouter);
app.use('/api/signin', signInRouter);
app.use('/api/subscribes', subscribesRouter);

// app.use('/api/personalarea', PersonalAreaRouter);

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

module.exports = app;
