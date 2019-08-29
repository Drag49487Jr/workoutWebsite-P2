const Athlete = require('../models/athlete')
const Regiment = require('../models/regime')

module.exports = {
  index,
  home,
  new: newAthlete,
  create: createRegiment,
  aboutMe,
  show,
  exerciseRoutine,
  exercise,
  deleteExercise,
  mealPlan,
  meal,
}

function meal (req, res) {
  Regiment.findById(req.params.id, (err, regime)=>{
    regime.mealPlan.push(req.body);
    regime.save(function(err) {
      res.redirect(`/athletes/${regime._id}/mealPlan`);
    });
  });
}

function mealPlan (req, res) {
  Regiment.findById(req.params.id, (err, regime)=>{
    res.render('athletes/mealPlan', {
     regime,
     user: req.user,
    });
  });
}

function deleteExercise(req, res) {
  Regiment.findById(req.params.id, (err, regime) => {
    if (err) throw err
    regime.exercise.id(req.params.eid).remove()
    regime.save(function (err) {
    if (err) throw err
    console.log('resource deleted')
    res.redirect(`/athletes/${req.params.id}/exerciseRoutine`)
    })
  })
}
  
function exercise (req, res) {
  Regiment.findById(req.params.id, function(err, regime) {
            regime.exercise.push(req.body);
            regime.save(function(err) {
            console.log('is there a regimr', regime)
            res.redirect(`/athletes/${regime._id}/exerciseRoutine`);
            });
            console.log(regime);
        });
}

function exerciseRoutine(req, res) {
  Regiment.findById(req.params.id, function(err, regime) {
    res.render('athletes/exerciseRoutine',{
        regime,
        user: req.user,
      });
  });
}

// This should find the athlete logged in by ID, then allow you to access the user model, from there you should be able to get into the regiment array to access the regiment object
function home(req, res) {
  Athlete.findById(req.params.id)
    .populate('regiments')
    .exec((err, athlete) => {
      res.render('athletes/home', {
        athlete,
        user: req.user
      });
    });
}

// This is the function that serves the form to create a new athlete
function newAthlete(req, res) {
  res.render('athletes/new', { user: req.user })
}

// This should create a new regiment to be added to the DB
function createRegiment(req, res) {
// console.log('req.user: ', req.user);
  let newRegiment = new Regiment(req.body) // create a new instance of an regiment
  newRegiment.save((err) => {
    // console.log('reg save error: ', err);
    Athlete.findById(req.user._id, (err, athlete) => {
      // find athlete to push the new regiment ID into the reference ARR
    //   console.log(athlete)
      athlete.regiments.push(newRegiment._id) // acutaly push into ARR
      athlete.save(err => {
        // Saves the athlete model, with new reference to regiment
        if (err) return res.redirect('/athletes')
        res.redirect(`/athletes/${req.user._id}/home`)
      });
    });
  });
}


function show(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  var newAthlete = new Regime(req.body)
  newAthlete.save(function(err) {
    res.redirect('create')
  });
}


function aboutMe(req, res) {
  res.render('athletes/aboutMe')
}

function index(req, res) {
  Athlete.findById(req.user._id, function(err, athletes) {
    if (err) return next(err)
    res.render('athletes/index', {
      athletes,
      user: req.user
    });
  });
}
