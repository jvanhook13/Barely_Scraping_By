const mongoose = require("mongoose") ;
const Schema = mongoose.Schema

let Song = new Schema({

    author:{

        type: String
    } ,

    body:{

        type: String

    }


}) ;


let son = mongoose.model("Song", Song)

module.exports= son