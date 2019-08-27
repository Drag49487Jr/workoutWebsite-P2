var Regime = require('../models/regime');

module.exports = {
    create,
    show,
};

function show(req, res) {
        Regime.findById(req.params.id, function(err, regime) {
        res.render(`athletes/mealExercise`, { regime });
    })
}

function create(req, res) {
    Regime.findById(req.params.id, function(err, regime) {
            regime.exercise.push(req.body);
            regime.save(function(err) {
            console.log(regime)
            res.render(`athletes/mealExercise`, { regime });
            });
        });
}



