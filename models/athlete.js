var mongoose = require('mongoose');

var mealSchema = new mongoose.Schema({

});

var exerciseSchema = new mongoose.Schema({

});

var athleteSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
}, {
    timestamps:true
});

module.exports = mongoose.model('Athlete', athleteSchema);