const { mongoose } = require("../configuration/dbConfig");

const productSchema = new mongoose.Schema({
    productName: String,
    productDetails: String,
    productAmount: Number, // assuming amount is a number
});

module.exports = mongoose.model("Product", productSchema);
