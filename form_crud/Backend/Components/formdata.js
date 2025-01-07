const formdata= (req, res) => {
    const { name, dob, email } = req.body;

    const newRecord = { id: Date.now(), name, dob, email };
    data.push(newRecord);

    res.json({ msg: 'Record added successfully', record: newRecord });
};
module.exports = formdata