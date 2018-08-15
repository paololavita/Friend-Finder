// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require('express')
var bodyParser = require("body-parser");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server

const app = express()

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

//require("./app/routing/api-routes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

/*app.get('/', (req, res) => res.send('Hello World!'))

app.get('/survey', function (req, res) {
    res.send('survey')
  })*/
  
app.get('/api/friends', function (req, res) {
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
      })
})
  
  app.post('/api/friends', function (req, res) {
    var cereal=JSON.parse(req);
    res.send('post cereal')
    //res.send(cereal)
  })



// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });