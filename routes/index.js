var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cats-R-Us' });
});

router.get('/dogs', function(req, res, next) {
  res.render('dogs', {});
});

module.exports = router;
