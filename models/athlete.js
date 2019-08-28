var mongoose = require('mongoose');

var athleteSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    regiment: [regimentSchema]
}, {
    timestamps:true
});

var regimentSchema = new Schema ({
    height: {
        type:String, match: /(\d{1,2}'\d{1,2})/
    },
    weight:Number,
    mealPlan: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MealPlan'
    }],
    exercise: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
    }],
});

module.exports = mongoose.model('Athlete', athleteSchema);