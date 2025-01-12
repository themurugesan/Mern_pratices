const crypto = require("crypto");

const Hashgeneration = async(req,res,next)=>{
    try {
        const {contact} = req.body;

        let string = String(contact);
       
        const hash = crypto.createHash("sha256").update(string).digest("hex");
        req.hash = hash;

        console.log(hash);



        if(hash){
            next()
        }
        


    } catch (error) {
        console.log(error.message);
        
        return res.status(200).json({msg:"Internal server error",code:500})
    }
}

module.exports = Hashgeneration