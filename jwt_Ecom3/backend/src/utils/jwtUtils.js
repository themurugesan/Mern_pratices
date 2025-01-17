const jwt = require("jsonwebtoken");
const { secretkey } = require("../configuration/jwtConfig");

console.log(secretkey)
async function generateToken(user) { 
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    };
    return jwt.sign(payload, secretkey, { expiresIn: "1h" });
}

module.exports = { generateToken };  // Export as an object with the property 'generateToken'
