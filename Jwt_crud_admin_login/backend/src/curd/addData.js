const Product = require("../models/product");


async function addData(req, res) {
    const { productName, productDetails, productAmount } = req.body;

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

    const createProduct = new Product({
        productName,
        productDetails,
        productAmount,
    });

    try {
        const savedProduct = await createProduct.save();
        return res.status(200).json({ msg: 'Product added successfully', product: savedProduct });
    } catch (error) {
        return res.status(500).json({ msg: "An error occurred while saving the product." });
    }
}


module.exports={addData}