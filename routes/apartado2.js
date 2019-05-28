var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sistemas', { title: 'Express' });
});

router.get('/renep', function(req, res, next) {
  res.render('rene', { title: 'Expresss' });
});

module.exports = router;
