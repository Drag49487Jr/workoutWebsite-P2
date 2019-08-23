var router = require('express').Router();
var athletesCtrl = require('../controllers/athletes');
/* GET users listing. */
router.get('/athletes', athletesCtrl.index); 
router.get('/athletes/new', athletesCtrl.new);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
