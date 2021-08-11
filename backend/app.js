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
require('dotenv').config();
const fileupload = require("express-fileupload");

// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// const apiRouter = require('./routes/api');
const signUpRouter = require('./routes/signUp')
const signInRouter = require('./routes/signIn');
const logoutRouter = require('./routes/logout');
// const uploadFileRouter = require('./routes/uploadFile')
const {COOKIE_SECRET, COOKIE_NAME } = process.env;
const subscribesRouter = require('./routes/subscribes.router')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('cookieName', COOKIE_NAME)

// const multer = require('multer');


// const storageConfig = multer.diskStorage({
//   destination: (req, file, cb) =>{
    
//     cb(null, "../public/uploads");
//   },
//   filename: (req, file, cb) =>{
//     cb(null, file.originalname);
//   }
// });

// app.use(multer({storage:storageConfig}).single("myFile"))

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
app.use(fileupload())
app.set('trust proxy', 1);

app.use(
  session({
    name: app.get('cookieName'),
    secret: COOKIE_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new RedisStore({client: RedisClient}, {secret: COOKIE_SECRET,}
      ), 
    // secret: 'abraradabra',
    // proxy: true,
    cookie: { 
      secure: true, 
      sameSite: 'none', 
      httpOnly: true ,
    },
  }));

// app.use('/api', apiRouter);
app.use('/api/v1/subscribes', subscribesRouter)
app.use('/users', usersRouter);
app.use('/api/signup', signUpRouter);
app.use('/api/signin', signInRouter);
app.use('/api/logout', logoutRouter);
// app.use('/api/uploadimg', uploadFileRouter)

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
