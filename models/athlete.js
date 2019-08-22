var mongoose = require('mongoose');

var mealSchema = new mongoose.Schema({

});

var exerciseSchema = new mongoose.Schema({

});

var regimentSchema = new mongoose.Schema({
    name: String,
    email: String,

}, {
    timestamps:true
});

module.exports = mongoose.model('Athlete', regimentSchema);