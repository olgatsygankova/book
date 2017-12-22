var express = require('express');
var router = express.Router();
var books = require('./books.json');

/* GET books listing. */
router.get('/', function(req, res, next) {
    res.send(books);
});

module.exports = router;

