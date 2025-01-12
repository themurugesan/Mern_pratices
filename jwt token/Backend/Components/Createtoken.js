const crypto = require("crypto");
const jsonweb = require("jsonwebtoken");
const Createtoken = async(req,res)=>{
    try {

        const data = req.body;

        let secretekey = crypto.randomBytes(128).toString("hex");

        console.log(secretekey);

        const token = jsonweb.sign(data,secretekey);

        console.log(token);

        const verify = jsonweb.verify(token,secretekey)
        console.log(verify,"verifyyyyyyyyyyyyy");
        

        if(token){
            return res.status(200).json({"token" : token})
        }
        
        



        
    } catch (error) {
        return res.status(200).json({msg:"Internal server error",code :500})
    }
}

module.exports = Createtoken