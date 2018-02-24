var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
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

app.get('/categories', (req, res, err) => {
    db.query('SELECT categories.name as category, categories.id, array_to_json(array_agg(row_to_json (t))) as books ' +
        'from (SELECT books.cover, books.annotation, books.author, books.title, books.id, array_to_json(array_agg(row_to_json (es))) as estimate ' +
        'from (SELECT estimates.book_id, estimates.estimate from estimates) es ' +
        'RIGHT JOIN books ON es.book_id = books.id GROUP BY books.id) t ' +
        'LEFT JOIN category_book ON t.id = category_book.book_id ' +
        'LEFT JOIN categories ON categories.id = category_book.category_id ' +
        'GROUP BY categories.name, categories.id')
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.get('/category/:id', (req, res) => {
    const id_params = req.params.id;
    db.one('SELECT categories.name as category, categories.id, array_to_json(array_agg(row_to_json (t))) as books ' +
        'from (SELECT books.cover, books.annotation, books.author, books.title, books.id, array_to_json(array_agg(row_to_json (es))) as estimate ' +
        'from (SELECT estimates.book_id, estimates.estimate from estimates) es RIGHT JOIN books ON es.book_id = books.id GROUP BY books.id) t ' +
        'LEFT JOIN category_book ON t.id = category_book.book_id ' +
        'LEFT JOIN categories ON categories.id = category_book.category_id where category_book.category_id = ${id_params} ' +
        'GROUP BY categories.name, categories.id', {id_params: id_params})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.get('/my-books/:id', (req, res) => {
    const id_params = req.params.id;
    db.query('SELECT books.cover, books.annotation, books.author, books.title, books.id, array_to_json(array_agg(row_to_json(es))) as estimate ' +
        'from (SELECT estimates.estimate, estimates.id, estimates.user_id as user_id, estimates.book_id from estimates ' +
        'GROUP BY estimates.book_id, estimates.estimate, estimates.id) es ' +
        'RIGHT JOIN books ON books.id = es.book_id where books.user_id = ${id_params} ' +
        'GROUP BY books.cover, books.annotation, books.author, books.title, books.id', {id_params: id_params})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.get('/categories-name', (req, res) => {
    db.query('SELECT name, id from categories')
        .then((data) => {
            res.send(data);
            console.log (data);
        })
        .catch((err) => {
            res.send(err);
            console.log (err);
        });
});

app.get('/book/:id', (req, res) => {
    const id_params = req.params.id;
    db.one('SELECT books.text, books.isbn, books.cover, books.annotation, books.author, books.title, books.id, es.estimate, t.genre ' +
        'from (SELECT array_to_json(array_agg(row_to_json(r))) as estimate ' +
        'from (SELECT estimates.estimate, estimates.id, estimates.user_id as user_id, estimates.book_id ' +
        'from estimates where estimates.book_id = ${id_params} ' +
        'GROUP BY estimates.book_id, estimates.estimate, estimates.id ) r) as es ' +
        'RIGHT JOIN (SELECT category_book.book_id, array_to_json(array_agg(categories.name)) as genre ' +
        'from categories RIGHT JOIN category_book ON categories.id = category_book.category_id ' +
        'GROUP BY category_book.book_id) t ' +
        'LEFT JOIN books ON books.id = t.book_id ON t.book_id = books.id where books.id = ${id_params}', {id_params: id_params})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

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
});

app.put('/book/add-comment', (req, res) => {
    const {userid, bookid, comment, date} = req.body;
    let params = {
        id: uuidv4(),
        userid,
        bookid,
        comment,
        date
    };
    db.one('INSERT INTO comments (id, user_id, book_id, comment, date) VALUES (${id}, ${userid}, ${bookid}, ${comment}, ${date}) RETURNING *', params)
        .then((data) => {
            res.send(data);
            console.log (data);
        })
        .catch((err) => {
            res.send(err);
            console.log (err);
        });

});

app.put('/load-book', (req, res) => {
    const {userid, id, title, author, categories, isbn, annotation, cover, text} = req.body;
    let book_id = uuidv4();
    let params1 = {
        id: book_id,
        userid,
        title,
        author,
        isbn,
        annotation,
        cover,
        text
    };
    db.one('INSERT INTO books (id, user_id, title, author, isbn, annotation, cover, text) ' +
        'VALUES (${id}, ${userid}, ${title}, ${author}, ${isbn}, ${annotation}, ${cover}, ${text}) RETURNING *', params1)
        .then((data) => {
            categories ? categories.map((categories) => {
                let params2 = {
                    id: uuidv4(),
                    book_id: book_id,
                    categoriesid: categories
                };
                db.one('INSERT INTO category_book (id, book_id, category_id) VALUES (${id}, ${book_id}, ${categoriesid}) RETURNING *', params2)
                    .then((nextData) => {
                        res.send(nextData);
                        console.log("nextData", nextData);
                    })
                    .catch((nextErr) => {
                        res.send(nextErr);
                        console.log(nextErr);
                    });
            }) : ''
        })
        .catch((err) => {
            res.send(err);
            console.log (err);
        });
});

app.post('/user/update', (req, res) => {
    const {userid, username, email, password} = req.body;
    let params = {
        userid,
        username,
        email,
        password,
        emailpassword: base64.encode(email + password)
    };
    db.one('UPDATE users SET username = ${username}, password = ${password}, email = ${email}, emailpassword = ${emailpassword} ' +
        'WHERE id = ${userid} RETURNING username, email, password, emailpassword', params)
        .then((data) => {
            res.send(data);
            console.log (data);
        })
        .catch((err) => {
            res.send(err);
            console.log (err);
        });

});

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
    db.query('SELECT comments.comment, comments.user_id, comments.book_id, comments.date, users.username ' +
        'FROM comments RIGHT JOIN users ON comments.user_id = users.id WHERE comments.book_id = ${id_book}', {id_book: id_book})
        .then((data) => {
            res.send(data);
            console.log(data);
        })
        .catch((err) => {
            res.send(err);
            console.log(err);
        });
});

app.get('/search/full/:text', (req, res) => {
    const text = req.params.text.replace(/\s+/g, '|');
    let params = {
        options: "StartSel=<mark>, StopSel=</mark>, MaxFragments=2, ShortWord=1, FragmentDelimiter=<p>...</p>," +
        "MaxWords=35, MinWords=15, HighlightAll=True",
        text,
        typeText: 'text',
        typeAuthor: 'author',
        typeTitle: 'title',
        typeIsbn: 'isbn'
    };
    db.query('SELECT foo.*, ts_headline(${typeText:name}, query, ${options}) as ${typeText:name}, ts_headline(${typeAuthor:name}, query, ${options}) as ${typeAuthor:name}, ts_headline(${typeTitle:name}, query, ${options}) as ${typeTitle:name}, rank, es.estimate\n' +
        'FROM (SELECT b.id, b.author, b.title, b.text, b.cover, b.isbn, query, ts_rank_cd(ti, query) as rank\n' +
        '      FROM (SELECT b_ti.*\n' +
        '            FROM (SELECT books.*, setweight(to_tsvector(coalesce(books.title, \'\')), \'A\') || ' +
        'setweight(to_tsvector(coalesce(books.author, \'\')), \'B\') || ' +
        'setweight(to_tsvector(coalesce(books.isbn, \'\')), \'B\') || ' +
        'setweight(to_tsvector(coalesce(books.text, \'\')), \'D\') as ti\n' +
        '                  FROM books) as b_ti) as b, to_tsquery(${text}) query\n' +
        '      WHERE query @@ ti\n' +
        '      ORDER BY rank DESC LIMIT 100) AS foo LEFT JOIN (SELECT t.book_id, array_to_json(array_agg(t)) as estimate\n' +
        '           FROM (SELECT book_id, estimate from estimates) t\n' +
        '           GROUP BY book_id) es\n' +
        '  ON es.book_id = foo.id', params)
        .then((data) => {
            res.send(data);
            console.log(data);
        })
        .catch((err) => {
            res.send(err);
            console.log(err);
        });
});

app.get('/search/title/:text', (req, res) => {
    const text = req.params.text.replace(/\s+/g, '|');
    let params = {
        options: "StartSel=<mark>, StopSel=</mark>, MaxFragments=2, ShortWord=10, FragmentDelimiter=<p>...</p>," +
        "MaxWords=35, MinWords=1, HighlightAll=True",
        text,
        type: 'title'
    };
    db.query('SELECT foo.*, ts_headline(${type:name}, query, ${options}) as ${type:name}, rank, es.estimate\n' +
        'FROM (SELECT b.id, b.title, b.text, b.cover, b.author, b.isbn, query, ts_rank_cd(ti, query) as rank\n' +
        '      FROM (SELECT b_ti.*\n' +
        '            FROM (SELECT books.*, setweight(to_tsvector(coalesce(books.title, \'\')), \'A\') as ti\n' +
        '                  FROM books) as b_ti) as b, to_tsquery(${text}) query\n' +
        '      WHERE query @@ ti ORDER BY rank DESC LIMIT 100) AS foo LEFT JOIN (SELECT t.book_id, array_to_json(array_agg(t)) as estimate\n' +
        '           FROM (SELECT book_id, estimate from estimates) t\n' +
        '           GROUP BY book_id) es\n' +
        '  ON es.book_id = foo.id', params)
        .then((data) => {
            res.send(data);
            console.log(data);
        })
        .catch((err) => {
            res.send(err);
            console.log(err);
        });
});

app.get('/search/author/:text', (req, res) => {
    const text = req.params.text.replace(/\s+/g, '|');
    let params = {
        options: "StartSel=<mark>, StopSel=</mark>, MaxFragments=2, ShortWord=1, FragmentDelimiter=<p>...</p>," +
        "MaxWords=20, MinWords=15, HighlightAll=True",
        text,
        type: 'author'
    };
    db.query('SELECT foo.*, ts_headline(${type:name}, query, ${options}) as ${type:name}, rank, es.estimate\n' +
        'FROM (SELECT b.id, b.author, b.title, b.text, b.cover, b.isbn, query, ts_rank_cd(ti, query) as rank\n' +
        '      FROM (SELECT b_ti.*\n' +
        '            FROM (SELECT books.*, setweight(to_tsvector(coalesce(books.author, \'\')), \'A\') as ti\n' +
        '                  FROM books) as b_ti) as b, to_tsquery(${text}) query\n' +
        '      WHERE query @@ ti ORDER BY rank DESC LIMIT 100) AS foo LEFT JOIN (SELECT t.book_id, array_to_json(array_agg(t)) as estimate\n' +
        '           FROM (SELECT book_id, estimate from estimates) t\n' +
        '           GROUP BY book_id) es\n' +
        '  ON es.book_id = foo.id', params)
        .then((data) => {
            res.send(data);
            console.log(data);
        })
        .catch((err) => {
            res.send(err);
            console.log(err);
        });
});

app.get('/search/isbn/:text', (req, res) => {
    const text = req.params.text.replace(/\s+/g, '|');
    let params = {
        options: "StartSel=<mark>, StopSel=</mark>, MaxFragments=2, ShortWord=10, FragmentDelimiter=<p>...</p>," +
        "MaxWords=35, MinWords=1, HighlightAll=True",
        text,
        type: 'author'
    };
    db.query('SELECT foo.*, ts_headline(${type:name}, query, ${options}) as ${type:name}, rank, es.estimate\n' +
        'FROM (SELECT b.id, b.title, b.text, b.cover, b.author, b.isbn, query, ts_rank_cd(ti, query) as rank\n' +
        '      FROM (SELECT b_ti.*\n' +
        '            FROM (SELECT books.*, setweight(to_tsvector(coalesce(books.isbn,\'\')), \'D\') as ti\n' +
        '                  FROM books) as b_ti) as b, to_tsquery(${text}) query\n' +
        '      WHERE query @@ ti\n' +
        '      ORDER BY rank DESC LIMIT 100) AS foo LEFT JOIN (SELECT t.book_id, array_to_json(array_agg(t)) as estimate\n' +
        '           FROM (SELECT book_id, estimate from estimates) t\n' +
        '           GROUP BY book_id) es\n' +
        '  ON es.book_id = foo.id', params)
        .then((data) => {
            res.send(data);
            console.log(data);
        })
        .catch((err) => {
            res.send(err);
            console.log(err);
        });
});

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

app.post('/singup', (req, res, err) => {
    const {email, password} = req.body;
    let params = [uuidv4(), '', password, email, base64.encode(email + password)];
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
    const id = req.params.id;
    db.one('SELECT * FROM users WHERE id = ${id}', {id: id})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
            console.log (err);
        });
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