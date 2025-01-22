import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin_dashboard.css';  // Import CSS

const App = () => {
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');  // New state for product description
    const [amount, setAmount] = useState('');  // New state for product amount
    const [file, setFile] = useState(null);
    const [editMode, setEditMode] = useState(false); // Toggle for update mode
    const [currentImageId, setCurrentImageId] = useState(null); // ID of the image being edited

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        const { data } = await axios.get('http://localhost:5000/images');
        setImages(data);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
    
        // Form validation
        if (!title || title.length < 3) {
            alert('Title must be at least 3 characters long.');
            return;
        }
    
        if (!description || description.length < 3) {
            alert('Description must be at least 3 characters long.');
            return;
        }
    
        if (!amount || isNaN(amount) || amount <= 0) {
            alert('Amount must be a valid number greater than zero.');
            return;
        }
    
        if (!file) {
            alert('Please select an image file.');
            return;
        }
    
        // Proceed with form submission if validation passes
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('amount', amount);
        formData.append('image', file);
    
        try {
            if (editMode) {
                // Update an existing image
                await axios.put(`http://localhost:5000/images/${currentImageId}`, formData);
                setEditMode(false); // Exit edit mode
                setCurrentImageId(null); // Reset current image
            } else {
                // Create a new image
                await axios.post('http://localhost:5000/upload', formData);
            }
    
            setTitle('');
            setDescription('');
            setAmount('');
            setFile(null);
            fetchImages(); // Refresh the list of images
        } catch (error) {
            alert('Error uploading image. Please try again.');
        }
    };
    

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/images/${id}`);
        fetchImages();
    };

    const handleEdit = (image) => {
        setEditMode(true);
        setCurrentImageId(image._id);
        setTitle(image.title);
        setDescription(image.description);  // Set description when editing
        setAmount(image.amount);  // Set amount when editing
    };

    return (
        <div className="app-container">
            <h1 className="heading">Image Upload with CRUD</h1>
            <form className="upload-form" onSubmit={handleUpload}>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="input-field"
                    placeholder="Product Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}  // Handle change for description
                />
                <input
                    type="number"
                    className="input-field"
                    placeholder="Product Amount"
                    value={amount}
                        
                    onChange={(e) => setAmount(e.target.value)}  // Handle change for amount
                />
                <input
                    type="file"
                    className="input-field"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button className="submit-btn" type="submit">{editMode ? 'Update' : 'Upload'}</button>
            </form>

            <div className="images-container">
                {images.map((image) => (
                    <div key={image._id} className="image-card">
                        <h2 className="image-title">{image.title}</h2>
                        <p className="image-description">{image.description}</p>
                        <p className="image-price">Price: ${image.amount}</p>
                        <img
                            className="image-thumbnail"
                            src={`http://localhost:5000/${image.image}`}
                            alt={image.title}
                        />
                        <button className="edit-btn" onClick={() => handleEdit(image)}>Edit</button>
                        <button className="delete-btn" onClick={() => handleDelete(image._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
