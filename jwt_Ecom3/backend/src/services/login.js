const bcrypt = require("bcrypt");
const User = require("../models/user");  // Ensure User is the correct model path
const { generateToken } = require("../utils/jwtUtils");  // Now you're destructuring from the object

async function login(email, password) {
    try {
        const existingUser = await User.findOne({ email });  // Look up user by email
        if (!existingUser) {
            throw new Error("User not found");
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);  // Compare the password
        if (!isPasswordValid) {
            throw new Error("Incorrect password");
        }

        const token = await generateToken(existingUser);  // Generate JWT token
        return token;
    } catch (error) {
        console.error("Login error:", error.message);
        throw new Error("Invalid credentials");  // This is the error you catch in the controller
    }
}

module.exports = { login };
