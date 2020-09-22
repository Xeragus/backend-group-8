var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const mongoose = require('mongoose')
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
const accountRouter = require('./routes/accounts')
const customersRouter = require('./routes/customers')
const transferRouter = require('./routes/transfer')

var app = express()

mongoose.connect(
  'mongodb+srv://bobz:87-pr-12@lavovigroup.ngbhd.mongodb.net/banking_system_cloud?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true }
)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/accounts', accountRouter)
app.use('/customers', customersRouter)
app.use('/transfer', transferRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
