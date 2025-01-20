
const Product = require("../models/product");

async function updateData (req, res) {
    const { productName, productDetails, productAmount } = req.body;
    const { id } = req.params;

    const nameRegex = /^[a-zA-Z ]*$/;
    if (!nameRegex.test(productName)) {
        return res.status(400).json({ msg: "Product Name must contain only alphabets and spaces." });
    }

    const detailsRegex = /^[a-zA-Z ]*$/;
    if (!detailsRegex.test(productDetails)) {
        return res.status(400).json({ msg: "Invalid Product Details." });
    }

    const amountRegex = /^[0-9 ]*$/;
    if (!amountRegex.test(productAmount)) {
        return res.status(400).json({ msg: "Invalid Product Amount." });
    }

    try {
        const product = await Product.findByIdAndUpdate(id, { productName, productDetails, productAmount }, { new: true });
        if (!product) {
            return res.status(404).json({ msg: "Product not found." });
        }
        return res.status(200).json({ msg: 'Product updated successfully', product });
    } catch (error) {
        return res.status(500).json({ msg: "An error occurred while updating the product." });
    }
}
module.exports={updateData}