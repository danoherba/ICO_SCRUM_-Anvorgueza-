var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('informacion', { title: 'Express' });
});

router.get('/renep', function(req, res, next) {
  res.render('rene', { title: 'Express' });
});

router.get('/danielba', function(req, res, next) {
  res.render('danielb', { title: 'Express' });
});

router.get('/daniel', function(req, res, next) {
  res.render('danielo', { title: 'Express' });
});

router.get('/alinel', function(req, res, next) {
  res.render('aline', { title: 'Express' });
});

router.get('/miguela', function(req, res, next) {
  res.render('miguel', { title: 'Express' });
});

module.exports = router;
