var router = require('express').Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/athletes');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));


router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/athletes',
    failureRedirect: '/athletes',
  }
));

router.get('/logout', function(req, res) {
  req.logout('/');
  res.redirect('/athletes');
});

module.exports = router;
