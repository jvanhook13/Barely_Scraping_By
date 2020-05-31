const mongoose = require("mongoose") ;
const Schema = mongoose.Schema

let Comment = new Schema({

    author:{

        type: String
    } ,

    body:{

        type: String

    }


}) ;


let Com = mongoose.model("Comment", Comment)

module.exports = Com