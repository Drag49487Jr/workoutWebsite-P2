var mongoose = require('mongoose');
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

module.exports = mongoose.model ('MealPlan', mealPlanSchema);
module.exports = mongoose.model ('Exercise', exerciseSchema);