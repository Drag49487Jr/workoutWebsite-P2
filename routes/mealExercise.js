var router = require('express').Router();
var mealExerciseCtrl = require('../controllers/mealExercise');

router.get('/athletes/:id/mealExercise', mealExerciseCtrl.show);
router.post('/athletes/:id/mealExercise', mealExerciseCtrl.create);

module.exports = router;