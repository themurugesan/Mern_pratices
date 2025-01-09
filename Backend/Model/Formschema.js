const mongoose = require("mongoose");
const DBurl = require("../Database/DB");


const Formschema = new mongoose.Schema({
    name : String,
    contact :{
        type : Number
    },
    address :Object,
    education : [Object]
},{timestamps:true})

const Formschemadb = DBurl.model("formdata",Formschema);

module.exports = Formschemadb;