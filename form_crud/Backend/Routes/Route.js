const router = require("express").Router();
let data = [];

router.route("/data").post((req, res) => {
    const { name, dob, email } = req.body;

    const nameRegex = /^[a-zA-Z]*$/; 
    if (!nameRegex.test(name)) {
        return res.status(400).json({ msg: "Name must contain only alphabets and spaces." });
    }

    const dobRegex=/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
    if (!dobRegex.test(dob)) {

        return res.status(400).json({ msg: "Invalid Date format." });
    }

    const emailRegex=/^(?![.-])([A-Za-z0-9-._%+]+)@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (!emailRegex.test(email)) {
        return res.status(400).json({ msg: "Invalid email address." });
    }

    const currentDate = new Date();
    const birthDate = new Date(dob);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < 18 ) {
        return res.status(400).json({ msg: "You must be at least 18 years old." });
    }

    const newRecord = { id: Date.now(), name, dob, email };
    data.push(newRecord);
    console.log(newRecord);

    return res.status(200).json({ msg: 'Record added successfully', record: newRecord });
});

router.route("/getdata").get((req, res) => {
    res.status(200).json(data);
});

router.route("/data/:id").put((req, res) => {
    const { name, dob, email } = req.body;
    const { id } = req.params;

    const nameRegex = /^[a-zA-Z ]*$/;
    if (!nameRegex.test(name)) {
        return res.status(400).json({ msg: "Name must contain only alphabets and spaces." });
    }

    
    const dobRegex=/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
    if (!dobRegex.test(dob)) {
        return res.status(400).json({ msg: "Invalid Date format." });
    }

    const emailRegex=/^(?![.-])([A-Za-z0-9-._%+]+)@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (!emailRegex.test(email)) {
        return res.status(400).json({ msg: "Invalid email address." });
    }

    const currentDate = new Date();
    const birthDate = new Date(dob);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
        return res.status(400).json({ msg: "You must be at least 18 years old." });
    }

    const recordIndex = data.findIndex(record => record.id === parseInt(id));
    console.log(recordIndex,id,"recordIndexxxxxxxxxxxxx");
    
    if (recordIndex === -1) {
        return res.status(404).json({ msg: "Record not found." });
    }

    data[recordIndex] = { ...data[recordIndex], name, dob, email };
    console.log(data,"data after update");

    return res.status(200).json({ msg: 'Record updated successfully', record: data[recordIndex] });
});

router.route("/data/:id").delete((req, res) => {
    const { id } = req.params;

    const recordIndex = data.findIndex(record => record.id === parseInt(id));
    if (recordIndex === -1) {
        return res.status(404).json({ msg: "Record not found." });
    }

    const deletedRecord = data.splice(recordIndex, 1);
    console.log(deletedRecord);

    return res.status(200).json({ msg: 'Record deleted successfully', record: deletedRecord[0] });
});

module.exports = router;
