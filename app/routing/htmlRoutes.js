// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
        //console.log(path.join(__dirname + '/../public/home.html'));
        //res.send("This is the Index Page");
    });
    
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
        //console.log(path.join(__dirname + '/../public/survey.html'));
        //res.send("This is the Survey Page");
    });

    // If no matching route is found default to home
    app.use(function (req, res) {
        //res.sendFile(path.join(__dirname + '/../public/404.html'));
        res.send("This is the 404 Error Page");
    });
};