var express = require("express");
var handlebars = require("express-handlebars")
var mongoose = require("mongoose");
var cheerio = require("cheerio")
var axios = require("axios");
// var db = require("./models");

var PORT = 3000;
var app = express();

// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI , { useNewUrlParser: true });

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


app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});