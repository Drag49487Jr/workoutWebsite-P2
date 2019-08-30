var mongoose = require('mongoose')

var Schema = mongoose.Schema

var mealPlanSchema = new Schema({
  nameMeal: {
    type:String,
    enum:[
      'Eggs',
      'Chicken Salad',
      'Chicken Breast',
      'Salmon',
      'Banana',
      'Cheerios w/ Berries',
      'Banana/Strawberry Smoothie'
    ]
  },
  quantity:Number,
})

var exerciseSchema = new Schema({
  nameExercise: {
    type:String,
    enum:[
      'LOWERBODY:Squats w/ Weight',
      'LOWERBODY:Barbell Hip Thrust',
      'LEGS:Dumbbell Bulgarian Split',
      'ABS:Heals to the Heavens',
      'ABS:Alternating Thread the Needle',
      'ABS:Stationary Bike',
      'CHEST:Dumbell Bench Press',
      'CHEST:Cable Pec Fly',
      'CHEST:Diamond Push Ups',
      'BICEPS:Close Grip Bar Curl',
      'BICEPS:Dumbbell Alternate Bicep Curl',
      'TRICEPS:Triceps Pushdown',
      'TRICEPS:Bench Dips',
      'TRICEPS:Decline Bar Triceps',

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
  description:String,
  mealPlan: [mealPlanSchema],
  exercise: [exerciseSchema]
})

module.exports = mongoose.model('Regiment', regimentSchema)/*

Issues line 12, 30, 34 cannot enumerate 
array of strings for Schema type Number 

*/