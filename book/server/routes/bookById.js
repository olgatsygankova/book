var express = require('express');
var router = express.Router();
var book = require('./books.json');

router.get('/:id', function(req, res, next) {
    res.send(book[req.params.id]);
});

module.exports = router;
