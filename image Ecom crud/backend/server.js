const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Define Schema and Model
const ImageSchema = new mongoose.Schema({
    title: String,
    description: String, // Add description field
    amount: Number, // Add amount field
    image: String,
});

const Image = mongoose.model('Image', ImageSchema);

// Multer Setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

// Routes
app.post('/upload', upload.single('image'), async (req, res) => {
    const { title, description, amount } = req.body; // Get description and amount from body
    const image = new Image({
        title,
        description, // Save description
        amount, // Save amount
        image: req.file.path,
    });
    await image.save();
    res.status(201).json(image);
});

app.get('/images', async (req, res) => {
    const images = await Image.find();
    res.json(images);
});

app.put('/images/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { title, description, amount } = req.body; // Get description and amount from body
    const updateData = { title, description, amount }; // Include description and amount in the update
    if (req.file) {
        updateData.image = req.file.path;
    }
    const updatedImage = await Image.findByIdAndUpdate(id, updateData, { new: true });
    res.json(updatedImage);
});

app.delete('/images/:id', async (req, res) => {
    const { id } = req.params;
    await Image.findByIdAndDelete(id);
    res.json({ message: 'Image deleted' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
