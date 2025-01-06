const router = require("express").Router();
const validator = require('validator'); 
let data = [];

router.route("/data").post((req, res) => {
    const { name, dob, email } = req.body;

    const nameRegex = /^[A-Za-z\s]+$/;
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
    if (age <18 || (age === 18 && currentDate.getMonth() < birthDate.getMonth()) || (age === 18 && currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        return res.status(400).json({ msg: "You must be at least 18 years old." });
    }

    const newRecord = { id: Date.now(), name, dob, email };
    data.push(newRecord);
    console.log(newRecord);

    res.json({ msg: 'Record added successfully', record: newRecord });
});

router.route("/getdata").get((req, res) => {
    res.json(data);
});

module.exports = router;
