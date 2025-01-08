const mongoose = require("mongoose");
const DBurl = require("../Database/DB");


const Formschema = new mongoose.Schema({
    name :{
        type : String
    },
    contact :{
        type : Number
    }
},{timestamps:true})

const Formschemadb = DBurl.model("formdata",Formschema);

module.exports = Formschemadb;