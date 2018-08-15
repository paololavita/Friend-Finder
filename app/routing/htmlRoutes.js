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
        //res.sendFile(path.join(__dirname + '/../public/home.html'));
        console.log(path.join(__dirname + '/../public/home.html'));
        res.send("This is the Index Page");
    });

    app.get('/survey', function (req, res) {
        //res.sendFile(path.join(__dirname + '/../public/survey.html'));
        res.send("This is the Survey Page");
    });

    app.post('/api/friends', function (req, res) {
        //var cereal=JSON.parse(req);
        //res.send('post cereal')
        res.json({
            "name":"Joe Blow",
            "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores":[
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
              ]
          }
        
        );
    });

    // If no matching route is found default to home
    app.use(function (req, res) {
        //res.sendFile(path.join(__dirname + '/../public/404.html'));
        res.send("This is the 404 Error Page");
    });
};