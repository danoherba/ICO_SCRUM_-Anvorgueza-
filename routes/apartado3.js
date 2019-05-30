var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('scrum', { title: 'Express' });
});

router.get('/herramienta', function(req, res, next) {
  res.render('herramientas', { title: 'Express' });
});

router.get('/metodologias', function(req, res, next) {
  res.render('metodologia', { title: 'Express' });
});

router.get('/role', function(req, res, next) {
  res.render('roles', { title: 'Express' });
});

router.get('/scrumm', function(req, res, next) {
  res.render('scru', { title: 'Express' });
});


module.exports = router;
