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




app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});