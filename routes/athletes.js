var router = require('express').Router();
var athletesCtrl = require('../controllers/athletes');
/* GET users listing. */
router.get('/athletes', athletesCtrl.index); 


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
