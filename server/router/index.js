/**
 * The Index of Routes
 */

module.exports = function (app) {

    // The signup route
    app.use('/search', require('./routes/search'));
    app.use('/signup', require('./routes/signup'));

};