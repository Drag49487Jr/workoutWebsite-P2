var mongoose = require('mongoose');
var Schema = mongoose.Schema;




var mealPlanSchema = new Schema ({
    name:String,
    quantity: Number,

});


var exerciseSchema = new Schema ({
    name:String,
    sets:Number,
    reps:Number,
});

var regimentSchema = new Schema ({
name:String,
height: {
    type:String, match: /(\d{1,2}'\d{1,2})/
},
weight:Number,
mealPlan: [mealPlanSchema],
exercise: [exerciseSchema],
});


module.exports = mongoose.model ('Regime', regimentSchema);