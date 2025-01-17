const crypto = require("crypto");

// Generate a random secret key
const secretkey = crypto.randomBytes(32).toString("hex"); // Fixed the typo here
// console.log(secretkey)
module.exports = {
    secretkey: secretkey
};
