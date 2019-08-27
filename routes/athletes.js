var router = require('express').Router();
var athletesCtrl = require('../controllers/athletes');
/* GET users listing. */
router.get('/', athletesCtrl.index); 
router.get('/aboutMe', athletesCtrl.aboutMe);
router.get ('/new', isLoggedIn, athletesCtrl.new);
router.get('/create', isLoggedIn, athletesCtrl.create);
router.get('/:id', athletesCtrl.mealExercise);



router.post('/create', athletesCtrl.show);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
