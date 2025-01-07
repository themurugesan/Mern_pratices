// controllers/getDataController.js
// Example data array (this can be replaced with a database in real-world applications)

const getData = (req, res) => {
    return res.status(200).json(req.data);
};

module.exports = getData;
