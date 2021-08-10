require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const morgan = require('morgan');
const redis = require('redis')
const authRouter = require('./routes/auth.router')
const usersRouter = require('./routes/users.router')
const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient()
const indexRouter = require('./routes/index.router');
const subscribesRouter = require('./routes/subscribes')

const app = express()

const {PORT, COOKIE_SECRET, COOKIE_NAME } = process.env


// SERVER'S SETTINGS
app.set('cookieName', COOKIE_NAME)

// APP'S MIDDLEWARES
app.use(morgan('dev'));
app.use(cors({
  origin: true,
  credentials: true,
}))
app.use(express.json())
app.use(session({
  name: app.get('cookieName'),
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({ client: redisClient }, {
    secret: COOKIE_SECRET,
  }),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
  },
}))

// APP'S ROUTES
app.use('/', indexRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/subscribes', subscribesRouter);


app.listen(PORT, () => {
  console.log('Server has been started on PORT ', PORT)
})
