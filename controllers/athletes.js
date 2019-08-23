const Athlete = require('../models/athlete');

module.exports = {
    index,
};

function index(req, res) {
    console.log(req.query)
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    Athlete.find(modelQuery)
    .sort(sortKey).exec(function(err, athletes) {
        if (err) return next(err);
        res.render('athletes/index', {
            athletes,
            user: req.user,
            name: req.query.name,
            sortKey
        });
    });

}