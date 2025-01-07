// controllers/updateDataController.js
const { validateData } = require('./dataValidator');
let data = [];

const updateData = (req, res) => {
    const { name, dob, email } = req.body;
    const { id } = req.params;

    // Validate data using the validator function
    const validation = validateData(name, dob, email);
    if (!validation.isValid) {
        return res.status(400).json({ msg: validation.msg });
    }

    const recordIndex = data.findIndex(record => record.id === parseInt(id));
    if (recordIndex === -1) {
        return res.status(404).json({ msg: "Record not found." });
    }

    data[recordIndex] = { ...data[recordIndex], name, dob, email };

    res.json({ msg: 'Record updated successfully', record: data[recordIndex] });
};

module.exports = updateData;
