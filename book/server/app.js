var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
var books = require('./books.json');
var categories = require('./categoriesBooks.json');
var search = require('./search.json');
var users = require('./users.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/book/:id', (req, res) => {
    res.send(books[req.params.id]);
});



app.put('/book/:id/star?value=:value', (req, res) => {
    //res.send(books[req.params.id]);

});



app.get('/category/:id', (req, res) => {
    res.send(categories[req.params.id]);
});

app.get('/search/aaa/', (req, res) => {
    res.send(search);
});

app.get('/aaa/category/:id', (req, res) => {
    res.send(search[req.params.id]);
});

app.get('/read/:id', (req, res) => {
    res.send(books[req.params.id]);
});

app.post('/login', (req, res) => {
    const {emailPassword} = req.body;
    let user = users.find(user => user.emailPassword === emailPassword);
    res.send(user);
});

app.get('/user/:id', (req, res) => {
    res.send(users[req.params.id]);
});

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(9000);

module.exports = app;
