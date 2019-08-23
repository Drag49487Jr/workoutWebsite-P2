const Athlete = require('../models/athlete');

module.exports = {
    index,
    new: newAthlete,
    aboutMe,
    profile,
    mealPlans,
};


function mealPlans (req, res) {
    Athlete.find({}, function(err, athletes) {
        if (err) return next (err);
        res.render('athletes/mealPlans', {
            athletes,
            user: req.user,
        });
    });
}


function profile(req, res) {
    Athlete.find({}, function(err, athletes) {
        if (err) return next (err);
        res.render('athletes/profile', {
            athletes,
            user:req.user,
        });
    });
}

function aboutMe(req, res) {
    Athlete.find({}, function(err, athletes) {
        if (err) return next (err);
        res.render('athletes/aboutMe', {
            athletes,
            user:req.user,
        });
    });
}

function newAthlete(req, res) {
    Athlete.find({}, function(err, athletes) {
        if (err) return next(err);
        res.render('athletes/new',  {
         athletes,
         user: req.user,
        });
    });
}
function index(req, res) {
    // console.log(req.query)
    // let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // let sortKey = req.query.sort || 'name';
    Athlete.find({}, function(err, athletes) {
        if (err) return next(err);
        res.render('athletes/index', {
            athletes,
            user: req.user,
            // name: req.query.name,
            // sortKey
        });
    });

}