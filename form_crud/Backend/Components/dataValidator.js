// controllers/dataValidator.js
const validator = require('validator');

// Function to validate data
const validateData = (name, dob, email) => {
    // Validate name (only alphabetic characters and spaces allowed)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        return { isValid: false, msg: "Name must contain only alphabets and spaces." };
    }

    // Validate date of birth (check if it's a valid date)
    if (!validator.isDate(dob)) {
        return { isValid: false, msg: "Invalid Date format." };
    }

    // Validate email (check if it's a valid email format)
    if (!validator.isEmail(email)) {
        return { isValid: false, msg: "Invalid email address." };
    }

    // Validate age (must be at least 18)
    const currentDate = new Date();
    const birthDate = new Date(dob);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < 18 || 
        (age === 18 && currentDate.getMonth() < birthDate.getMonth()) || 
        (age === 18 && currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        return { isValid: false, msg: "You must be at least 18 years old." };
    }

    // If all checks pass
    return { isValid: true };
};

module.exports = { validateData };
