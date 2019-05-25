var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teoria', function(req, res, next) {
  res.render('teoria', { title: 'Express' });
});

router.get('/sistemas', function(req, res, next) {
  res.render('sistemas', { title: 'Express' });
});

router.get('/scrum', function(req, res, next) {
  res.render('scrum', { title: 'Express' });
});

router.get('/informacion', function(req, res, next) {
  res.render('informacion', { title: 'Express' });
});

module.exports = router;
