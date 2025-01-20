const Product = require("../models/product");


async function readData(req, res) {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ msg: "An error occurred while fetching products." });
    }
}
module.exports={readData}