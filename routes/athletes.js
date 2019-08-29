var router = require('express').Router();
var athletesCtrl = require('../controllers/athletes');

/* GET users listing. */
router.get('/', athletesCtrl.index); // home page
router.get('/new', athletesCtrl.new); // serves form for new regiment
router.post('/home', athletesCtrl.create); // will post a new regiment 
router.get('/:id/home', athletesCtrl.home);


router.get('/:id/exerciseRoutine', athletesCtrl.exerciseRoutine);
router.post('/:id/exerciseRoutine', athletesCtrl.exercise);

router.get('/:id/mealPlan', athletesCtrl.mealPlan);
router.post('/:id/mealPlan', athletesCtrl.meal);

router.get('/aboutMe', athletesCtrl.aboutMe);
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
