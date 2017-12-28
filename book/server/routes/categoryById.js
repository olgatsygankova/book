var express = require('express');
var router = express.Router();
var category = require('./categoriesBooks.json');

router.get('/:id', function(req, res, next) {
    res.send(category[req.params.id]);
});

module.exports = router;
