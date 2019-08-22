var router = require('express').Router();
var athletesCtrl = require('../controllers/athletes');
/* GET users listing. */
router.get('/athletes', athletesCtrl.index); 

module.exports = router;
