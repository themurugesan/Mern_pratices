const router = require("express").Router();
const validator = require('validator');
let data = [];

// POST route for adding new data
router.route("/data").post((req, res) => {
    const { name, dob, email } = req.body;

    const nameRegex = /^[A-Za-z!/s]+$/;
    if (!nameRegex.test(name)) {
        return res.status(400).json({ msg: "Name must contain only alphabets and spaces." });
    }

    // const dobRegex= /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}/

    // if (!dobRegex.test(dob)) {
    //     return res.status(400).json({ msg: "Invalid Date format." });
    // }
    const emailRegex=/^(?![.-])([A-Za-z0-9-._%+]+)@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (!emailRegex.test(email)) {
        return res.status(400).json({ msg: "Invalid email address." });
    }

    const currentDate = new Date();
    const birthDate = new Date(dob);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < 18 || (age === 18 && currentDate.getMonth() < birthDate.getMonth()) || (age === 18 && currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        return res.status(400).json({ msg: "You must be at least 18 years old." });
    }

    const newRecord = { id: Date.now(), name, dob, email };
    data.push(newRecord);
    console.log(newRecord);

    return res.status(200).json({ msg: 'Record added successfully', record: newRecord });
});

// GET route to fetch all data
router.route("/getdata").get((req, res) => {
    res.status(200).json(data);
});

// PUT route to update an existing record
router.route("/data/:id").put((req, res) => {
    const { name, dob, email } = req.body;
    const { id } = req.params;

    const nameRegex = /^[A-Za-z!\s]+$/;
    if (!nameRegex.test(name)) {
        return res.status(400).json({ msg: "Name must contain only alphabets and spaces." });
    }

    const isValidDate = validator.isDate(dob);
    if (!isValidDate) {
        return res.status(400).json({ msg: "Invalid Date format." });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ msg: "Invalid email address." });
    }

    const currentDate = new Date();
    const birthDate = new Date(dob);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < 18 || (age === 18 && currentDate.getMonth() < birthDate.getMonth()) || (age === 18 && currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        return res.status(400).json({ msg: "You must be at least 18 years old." });
    }

    // Find the record by ID and update it
    const recordIndex = data.findIndex(record => record.id === parseInt(id));
    if (recordIndex === -1) {
        return res.status(404).json({ msg: "Record not found." });
    }

    data[recordIndex] = { ...data[recordIndex], name, dob, email };
    console.log(data[recordIndex]);

    return res.status(200).json({ msg: 'Record updated successfully', record: data[recordIndex] });
});

// DELETE route to remove a record
router.route("/data/:id").delete((req, res) => {
    const { id } = req.params;

    // Find the record by ID and remove it
    const recordIndex = data.findIndex(record => record.id === parseInt(id));
    if (recordIndex === -1) {
        return res.status(404).json({ msg: "Record not found." });
    }

    const deletedRecord = data.splice(recordIndex, 1);
    console.log(deletedRecord);

    return res.status(200).json({ msg: 'Record deleted successfully', record: deletedRecord[0] });
});

module.exports = router;
