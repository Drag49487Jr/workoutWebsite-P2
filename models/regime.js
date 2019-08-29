var mongoose = require('mongoose')

var Schema = mongoose.Schema

var mealPlanSchema = new Schema({
  nameMeal: {
    type:String,
    enum:[
      'eggs',
      'milk',
      'bread',
      'water',
      'fruit',
    ]
  },
  quantity:Number,
})

var exerciseSchema = new Schema({
  nameExercise: {
    type:String,
    enum:[
      'Squats w/ Weight',
      'Barbell Hip Thrust',
      'Dumbbell Bulgarian Split',
      'Heals to the Heavens',
      'Alternating Thread the Needle',
      'Stationary Bike'
    ]
  },
  sets:{
    type: Number,
    min:0,
    max:5,
  },
  reps:{
    type: Number,
    min:0,
    max:20,
  },
  time:String,
})

var regimentSchema = new mongoose.Schema({
  // athelte: [{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Athlete'
  // }],
  height:String,
  weight: Number,
  mealPlan: [mealPlanSchema],
  exercise: [exerciseSchema]
})

module.exports = mongoose.model('Regiment', regimentSchema)/*

Issues line 12, 30, 34 cannot enumerate 
array of strings for Schema type Number 

*/