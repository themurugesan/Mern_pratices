// controllers/addDataController.js
const { validateData } = require('./dataValidator');
let data = [];

const addData = (req, res,next) => {
    const { name, dob, email } = req.body;
    

    // Validate data using the validator function
    const validation = validateData(name, dob, email);
    if (!validation.isValid) {
        return res.status(400).json({ msg: validation.msg });
    }

    const newRecord = { id: Date.now(), name, dob, email };
    data.push(newRecord);
    req.data=data
    next()
    console.log(data)

    res.json({ msg: 'Record added successfully', record: newRecord });
};

module.exports = addData;
