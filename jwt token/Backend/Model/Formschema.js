const mongoose = require("mongoose");
const DBurl = require("../Database/DB");


const Formschema = new mongoose.Schema({
    name : String,
    hash:String,
    token : String,
    secretekey:String,
    contact :{
        type : Number
    },
    address :Object,
    education : [Object],
    numbers : [Number],
    friend:[{
        name:String,
        gender:String,
        contact:Number
    }]
},{timestamps:true})

const Formschemadb = DBurl.model("formdata",Formschema);

module.exports = Formschemadb;