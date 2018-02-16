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
var userBooks = require('./userBooks');
var usersSingup = require('./usersSingup');
var status = require('./status.json');
var pgp = require("pg-promise")(/*options*/);
const db = pgp("postgres://otsygankova:147258369@localhost:5432/book_addict");
const uuidv4 = require('uuid/v4');
var base64 = require('base-64');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*app.get('/categories', (req, res) => {
    res.send(categories);
});*/

app.get('/categories', (req, res, err) => {
    //db.query('SELECT categories.name as category, array_to_json(array_agg(row_to_json (t))) as books from (SELECT cover, annotation, author, title, id from books) t LEFT JOIN category_book ON t.id = category_book.book_id LEFT JOIN categories ON categories.id = category_book.category_id GROUP BY categories.name')
   // db.query('SELECT categories.name as category, array_to_json(array_agg(row_to_json (t))) as books from (SELECT books.cover, books.annotation, books.author, books.title, books.id, sum(estimates.estimate) from books LEFT JOIN estimates ON estimates.book_id = books.id GROUP BY books.id) t LEFT JOIN category_book ON t.id = category_book.book_id LEFT JOIN categories ON categories.id = category_book.category_id GROUP BY categories.name')
    db.query('SELECT categories.name as category, categories.id, array_to_json(array_agg(row_to_json (t))) as books from (SELECT books.cover, books.annotation, books.author, books.title, books.id, array_to_json(array_agg(row_to_json (es))) as estimate from (SELECT estimates.book_id, estimates.estimate from estimates) es RIGHT JOIN books ON es.book_id = books.id GROUP BY books.id LIMIT 7) t LEFT JOIN category_book ON t.id = category_book.book_id LEFT JOIN categories ON categories.id = category_book.category_id GROUP BY categories.name, categories.id')
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

/*app.get('/category/:id', (req, res) => {
    res.send(categories[req.params.id]);
});*/


app.get('/category/:id', (req, res) => {
    const id_params = req.params.id;
    db.one('SELECT categories.name as category, categories.id, array_to_json(array_agg(row_to_json (t))) as books from (SELECT books.cover, books.annotation, books.author, books.title, books.id, array_to_json(array_agg(row_to_json (es))) as estimate from (SELECT estimates.book_id, estimates.estimate from estimates) es RIGHT JOIN books ON es.book_id = books.id GROUP BY books.id) t LEFT JOIN category_book ON t.id = category_book.book_id LEFT JOIN categories ON categories.id = category_book.category_id where category_book.category_id = ${id_params} GROUP BY categories.name, categories.id', {id_params: id_params})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});


app.get('/books', (req, res) => {
    res.send(books);
});

/*app.get('/book/:id', (req, res) => {
    res.send(books[req.params.id]);
});*/

app.get('/book/:id', (req, res) => {

   // res.send(books[req.params.id]);
    const id_params = req.params.id;
   // db.one('SELECT books.cover, books.annotation, books.author, books.title, books.id, array_to_json(array_agg(row_to_json (es))) as estimate, array_to_json(array_agg(row_to_json (t))) as genre from (SELECT estimates.book_id, estimates.estimate from estimates) es RIGHT JOIN (SELECT categories.name as category, categories.id  from categories) t RIGHT JOIN category_book ON t.id = category_book.category_id LEFT JOIN books ON books.id = category_book.book_id ON es.book_id = books.id WHERE books.id = ${id_params} GROUP BY books.id', {id_params: id_params})
    db.one('SELECT books.text, books.isbn, books.cover, books.annotation, books.author, books.title, books.id, es.estimate, t.genre from (SELECT array_to_json(array_agg(row_to_json(r))) as estimate from (SELECT estimates.estimate, estimates.id, estimates.user_id as user_id, estimates.book_id from estimates where estimates.book_id = ${id_params} GROUP BY estimates.book_id, estimates.estimate, estimates.id ) r) as es RIGHT JOIN (SELECT category_book.book_id, array_to_json(array_agg(categories.name)) as genre from categories RIGHT JOIN category_book ON categories.id = category_book.category_id GROUP BY category_book.book_id) t LEFT JOIN books ON books.id = t.book_id ON t.book_id = books.id where books.id = ${id_params}', {id_params: id_params})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

/*app.put('/book/:id/star', (req, res) => {
    res.send(status);
    //res.send(status[req.query]);
});*/

app.put('/book/stars', (req, res) => {
    const {userid, estimate, bookid} = req.body;
    let params = {
        id: uuidv4(),
            userid,
            estimate,
            bookid
    };
    db.query('INSERT INTO estimates (id, user_id, estimate, book_id)' +
        '    VALUES (${id}, ${userid}, ${estimate}, ${bookid})' +
        '    ON CONFLICT (user_id, book_id) DO UPDATE SET' +
        '    estimate=EXCLUDED.estimate RETURNING *', params)
        .then((data) => {
            res.send(data);
            console.log(data)
        })
        .catch((err) => {
            res.send(err);
            console.log (err);
        });


  /*  INSERT INTO estimates (id, user_id, estimate, book_id)
    VALUES ('568de1c1-98f4-423b-8fe6-b0987193716b', '865755cf-3c05-4a7f-9ba7-ae242758b582', 2, '46f4b096-7d7b-47fd-b5c6-9f7d862e230a')
    ON CONFLICT (user_id, book_id) DO UPDATE SET
    estimate=EXCLUDED.estimate
    //res.send(status[req.query]);*/
});

app.put('/book/:id/add-comment', (req, res) => {
    res.send(books);
});

/*app.get('/category/:id', (req, res) => {
    res.send(categories[req.params.id]);
});*/

app.get('/search/aaa/', (req, res) => {
    res.send(search);
});

app.get('/aaa/category/:id', (req, res) => {
    res.send(search[req.params.id]);
});

/*app.get('/read/:id', (req, res) => {
    res.send(books[req.params.id]);
});*/

app.get('/read/:id', (req, res) => {
    const id_book = req.params.id;
    db.one('SELECT text, title, author FROM books WHERE books.id = ${id_book}', {id_book: id_book})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.get('/comments/:id', (req, res) => {
    const id_book = req.params.id;
    db.query('SELECT comments.comment, comments.user_id, comments.book_id, users.username FROM comments RIGHT JOIN users ON comments.user_id = users.id WHERE comments.book_id = ${id_book}', {id_book: id_book})
        .then((data) => {
            res.send(data);
            console.log(data);
        })
        .catch((err) => {
            res.send(err);
            console.log(err);
        });
});

/*app.post('/login', (req, res) => {
    const {emailPassword} = req.body;
    let user = users.find(user => user.emailPassword === emailPassword);
    res.send(user);
});*/

app.post('/login', (req, res, err) => {
    const {emailPassword} = req.body;
    db.query('SELECT username, id, password, email, emailpassword as token FROM users WHERE users.emailpassword = ${emailPassword}', {emailPassword: emailPassword})
        .then((data) => {
            res.send(data[0]);
        })
        .catch((err) => {
            res.send(err);
        });
});

//uuidv4();

/*app.post('/singup', (req, res) => {
    const {email, password} = req.body;
    let user = usersSingup.find(user => user.email === email);
    res.send (user);
});*/

app.post('/singup', (req, res, err) => {
    const {email, password} = req.body;
    let params = [uuidv4(), null, password, email, base64.encode(email + password)];
    db.one('INSERT INTO users VALUES ($1, $2, $3, $4, $5) RETURNING emailpassword', params)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.post('/recovery-password', (req, res) => {
    const {email} = req.body;
    let user = users.find(user => user.email === email);
    res.send(user);
});

app.get('/user/:id', (req, res) => {
    res.send(userBooks[req.params.id]);
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
