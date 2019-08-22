var mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true, useCreateIndex:true
});

mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to: ${process.env.DB_URL}`);
});

module.exports = mongoose;