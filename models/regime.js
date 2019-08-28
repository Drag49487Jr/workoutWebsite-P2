var mongoose = require('mongoose')

var Schema = mongoose.Schema

var mealPlanSchema = new Schema({
  nameMeal: {
    type: String,
    enum: ['eggs', 'milk', 'bread', 'water', 'fruit']
  },
  quantity: {
    type: Number,
    enum: ['1', '2', '3', '4'] 
  }
})

var exerciseSchema = new Schema({
  nameExercise: {
    type: String,
    enum: [
      'Squats w/ Weight',
      'Barbell Hip Thrust',
      'Dumbbell Bulgarian Split',
      'Heals to the Heavens',
      'Alternating Thread the Needle',
      'Stationary Bike'
    ]
  },
  sets: {
    type: Number,
    min:0,
    max:5,
  },
  reps: {
    type: Number,
    enum: ['0', '10', '15', '20']
  },
  time: {
    type: String,
    enum: ['30sec', '45sec', '1min', '1min30sec', '2min']
  }
})

var regimentSchema = new mongoose.Schema({
  // athelte: [{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Athlete'
  // }],
  height: {
    type: String
    // match: /(\d{1,2}'\d{1,2})/
  },
  weight: Number,
  mealPlan: [mealPlanSchema],
  exercise: [exerciseSchema]
})

module.exports = mongoose.model('Regiment', regimentSchema)

/*

Issues line 12, 30, 34 cannot enumerate 
array of strings for Schema type Number 

*/