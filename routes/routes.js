var express = require("express");
var cheerio = require("cheerio")
var axios = require("axios");
// Requiring our Comment and Article models
var Comment = require("../models/Comment.js");
var Song = require("../models/Song.js");



app.get("/",function(req,res){

    Song.find({})
    .populate("songs")
    // now, execute our query
    .exec(function(error, doc) {
      // Log any errors
      if (error) {
        console.log(error);
      }
      // Otherwise, send the doc to the browser as a json object
      else {
        console.log("all article with songs: "+ doc);
        res.render("index",{articles: doc});
      }
    });
  
  
  
  });

//Route to scrape website-
app.get("/scrape", function (req, res) {
    // First, we grab the body of the html with axios
    axios.get("https://soundcloud.com/discover").then(function (response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);
        $("a playableTile__descriptionContainer").each(function (i, element) {
            // Save an empty result object
            var result = {};
            console.log(result)

        })
    })
})

// Route for getting all Songs from the db
app.get("/songs", function(req, res) {
    // Grab every document in the Songs collection
    db.Song.find({})
      .then(function(dbSong) {
        // If we were able to successfully find Songs, send them back to the client
        res.json(dbSong);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });