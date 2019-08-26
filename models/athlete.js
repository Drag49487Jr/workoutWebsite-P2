var mongoose = require('mongoose');



var athleteSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
}, {
    timestamps:true
});

module.exports = mongoose.model('Athlete', athleteSchema);