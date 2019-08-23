var router = require('express').Router();
var athletesCtrl = require('../controllers/athletes');
/* GET users listing. */
router.get('/', athletesCtrl.index); 
router.get('/new', isLoggedIn, athletesCtrl.new);
router.get('/aboutMe', athletesCtrl.aboutMe);
router.get('/profile', isLoggedIn, athletesCtrl.profile);
router.post('/profile', athletesCtrl.profile);
router.get('/mealPlans', athletesCtrl.mealPlans);



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
