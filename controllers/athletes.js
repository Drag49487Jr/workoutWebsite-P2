const Athlete = require('../models/athlete');
const Regime = require('../models/regime');

module.exports = {
    index,
    new: newAthlete,
    aboutMe,
    create,
    show,
    mealExercise,
};


function mealExercise (req, res) {
        res.render('athletes/mealExercise')
}

function show(req, res) {
    for(let key in req.body) {
        if(req.body[key] === '') delete req.body[key];
    }
    var newAthlete = new Regime(req.body);
        newAthlete.save(function(err) {
            console.log(err)
            console.log(newAthlete);
            res.redirect('create')
            //console.log(req.body);
    });
}

 function create(req, res) { 
Regime.find({}, function(err, athletes){
res.render('athletes/create', {athletes});
console.log(athletes);
    })
};

function aboutMe(req, res) {
        res.render('athletes/aboutMe')
}

function newAthlete(req, res) {
        res.render('athletes/new');
}
function index(req, res) {
    Athlete.find({}, function(err, athletes) {
        if (err) return next(err);
        res.render('athletes/index', {
            athletes,
            user: req.user,
        });
    });

}