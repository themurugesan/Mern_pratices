const router = require("express").Router();
const cors=require("cors")

const { addData } = require("../curd/addData");
const { readData } = require("../curd/readData");
const { updateData } = require("../curd/updateData");
const { deleteData } = require("../curd/deleteData");

// Add new product

router.use(cors());

router.post("/data",addData)
// // Get all products
router.get("/getdata",readData)




// // Update product by ID
router.put("/data/:id",updateData)

// // Delete product by ID
router.delete("/data/:id",deleteData)

module.exports = router;
