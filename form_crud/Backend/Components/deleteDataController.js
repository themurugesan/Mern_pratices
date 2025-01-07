// controllers/deleteDataController.js
let data = [];

const deleteData = (req, res) => {
    const { id } = req.params;

    const recordIndex = data.findIndex(record => record.id === parseInt(id));
    if (recordIndex === -1) {
        return res.status(404).json({ msg: "Record not found." });
    }

    const deletedRecord = data.splice(recordIndex, 1);

    res.json({ msg: 'Record deleted successfully', record: deletedRecord[0] });
};

module.exports = deleteData;
