const Athlete = require('../models/athlete')
const Regiment = require('../models/regime')

module.exports = {
  index,
  home,
  new: newAthlete,
  create: createRegiment,
  aboutMe,
  show,
  mealExercise
}

// This should find the athlete logged in by ID, then allow you to access the user model, from there you should be able to get into the regiment array to access the regiment object
function home(req, res) {
  Athlete.findById(req.params.id)
    .populate('regiments')
    .exec((err, athlete) => {
      console.log(athlete)
      res.render('athletes/home', {
        athlete,
        user: req.user
      })
    })
}

// This is the function that serves the form to create a new athlete
function newAthlete(req, res) {
  res.render('athletes/new', { user: req.user })
}

// This should create a new regiment to be added to the DB
function createRegiment(req, res) {
console.log('req.user: ', req.user);
  let newRegiment = new Regiment(req.body) // create a new instance of an regiment
  newRegiment.save((err) => {
    console.log('reg save error: ', err);
    Athlete.findById(req.user._id, (err, athlete) => {
      // find athlete to push the new regiment ID into the reference ARR
      console.log(athlete)
      athlete.regiments.push(newRegiment._id) // acutaly push into ARR
      athlete.save(err => {
        // Saves the athlete model, with new reference to regiment
        console.log(
          'A new regiment was added to the DB, which a user can reference'
        )
        if (err) return res.redirect('/athletes')
        res.redirect(`/athletes/${req.user._id}/home`)
      })
    })
  })
}

function mealExercise(req, res) {
  res.render('athletes/mealExercise')
}

function show(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  var newAthlete = new Regime(req.body)
  newAthlete.save(function(err) {
    console.log(err)
    console.log(newAthlete)
    res.redirect('create')
    //console.log(req.body);
  })
}

//  function create(req, res) {
//         Athlete.find({}, function(err, athletes){
//         res.render('athletes/create', {athletes});
//         console.log(athletes);
//     })
// };

function aboutMe(req, res) {
  res.render('athletes/aboutMe')
}

function index(req, res) {
  Athlete.find({}, function(err, athletes) {
    if (err) return next(err)
    res.render('athletes/index', {
      athletes,
      user: req.user
    })
  })
}
