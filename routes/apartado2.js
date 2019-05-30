var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sistemas', { title: 'Express' });
});

router.get('/tpss', function(req, res, next) {
  res.render('tps', { title: 'Express' });
});

router.get('/crmm', function(req, res, next) {
  res.render('crm', { title: 'Express' });
});

router.get('/miss', function(req, res, next) {
  res.render('mis', { title: 'Express' });
});
module.exports = router;
