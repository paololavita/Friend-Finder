// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var friends = require("../data/friends.js");
//var bodyParser = require("body-parser");

// create application/json parser
//var jsonParser = bodyParser.json()

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        
        /*var userData = {
            name: "Donald Duck",
            photo: "Duckburg",
            scores: [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        };*/

        console.log("We are here!");
        console.log(req.body);
        console.log("and it's FULL!");

        // Here is where we take the results of the user's survey responses POST and parse through it.
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores)

        // This variable will calculate the difference between the user's scores and the scores of each user
        // in the database
        var totalDifference = 0;

        // Here we will loop through all the friend possibilities in the database
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i]);
            totalDifference = 0;

            // Then we will loop through all the scoers of each friend in the database
            for (var j = 0; j < friends[j].scores[j]; j++) {

                // We calculate the difference between the scores and the sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j])) - parseInt(friends[i].scores[j]);

                // If the sum of difference is less then the difference of the current "Best Match"
                if (totalDifference <= bestMatch.friendDifference) {

                    //Reset teh bestMatch to be the new friend
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;

                }
            }

        }

        // Finally we save the user's data to the database (this will have to happen AFTER the CHECK otehrewise
        // the database will always return that the user is the user's best match)
        friends.push(userData);

        // Return a JSON with the user's bestMatch. This will be used by the HTML on the next page
        res.json(bestMatch);
        console.log("This is the best match: " + bestMatch.name + " period!");
    });

}