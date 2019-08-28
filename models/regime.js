var mongoose = require('mongoose');
var Athlete = require('../models/athlete')

var Schema = mongoose.Schema;


var mealPlanSchema = new Schema ({
    nameMeal:{
        type:String,
        enum:['eggs','milk','bread','water','fruit'],
    },
    quantity: {
        type:Number,
        enum:['1','2','3','4'],
    }
});

var exerciseSchema = new Schema ({
    nameExercise:{
        type:String,
        enum: ['Squats w/ Weight', 'Barbell Hip Thrust', 'Dumbbell Bulgarian Split', 'Heals to the Heavans',
        'Alternating Thread the Needle', 'Stationary Bike'],
    },
    sets:{
        type:Number,
        enum:['0','1', '2', '3', '4'],
    },
    reps:{
        type:Number,
        enum:['0','10','15','20'],
    },
    time:{
        type:String,
        enum:['30sec','45sec','1min','1min30sec','2min'],
    }
});

var regimentSchema = new mongoose.Schema ({
    // athelte: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Athlete'
    // }],
    height: {
        type:String, match: /(\d{1,2}'\d{1,2})/
    },
    weight:Number,
    mealPlan: [mealPlanSchema],
    exercise: [exerciseSchema],
});

module.exports = mongoose.model ('Regiment', regimentSchema);
