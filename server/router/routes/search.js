/**
 * This handles the signing up of users
 */
var express = require('express');
var router = express.Router();


// The POST /signup route
router.post('/', function (req, res) {

    // The posted information from the front-end
    var body = req.body;
    // Current time this occurred
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    res.status(201).json({
        'message': 'Successfully created new user',
        'movies': ['test', 'balls', body]
    });

});

// Expose the module
module.exports = router;