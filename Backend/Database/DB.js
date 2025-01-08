const mongoose = require("mongoose");

const DBurl = ()=>{
    try {
        let url = mongoose.createConnection(process.env.DB_URL)
        return url;
    } catch (error) {
        console.log(error);
    }
}

module.exports = DBurl();