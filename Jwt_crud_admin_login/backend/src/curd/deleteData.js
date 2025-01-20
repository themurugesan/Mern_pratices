const Product = require("../models/product");


async function deleteData(req, res) {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ msg: "Product not found." });
        }
        return res.status(200).json({ msg: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ msg: "An error occurred while deleting the product." });
    }
}

module.exports={deleteData}