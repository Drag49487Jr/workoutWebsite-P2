var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Athlete = require('../models/athlete');

passport.use(new GoogleStrategy(
{
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
},

function(accessToken, refreshToken, profile, cb){
    Athlete.findOne({googleId: profile.id}, function(err, athlete){
        if(err) return cb(err);
        if(athlete) {
            return cb(null, athlete);
        } else {
            var newAthlete = new Athlete({
                name: profile.displayName,
                email:profile.emails[0].value,
                googleId: profile.id,
            });
            newAthlete.save(function(err){
                if(err) return cb(err);
                return cb(null, newAthlete);
            });
        }
    });
}
));
  
passport.serializeUser(function(athlete, done) {
    done(null, athlete.id);
});

passport.deserializeUser(function(id, done) {
    Athlete.findById(id, function(err, athlete) {
        done(err, athlete);
    })
});

