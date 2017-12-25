var express = require('express');
var router = express.Router();
var categories = require('./categoriesBooks.json');

/* GET books listing. */
router.get('/', function(req, res, next) {
    res.send(categories);
});

module.exports = router;

