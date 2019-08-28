var mongoose = require('mongoose');

var athleteSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    regiments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Regiment'
    }]
}, {
    timestamps:true
});

module.exports = mongoose.model('Athlete', athleteSchema);