const crypto = require("crypto");
const jsonweb = require("jsonwebtoken");
const Formschemadb = require("../Model/Formschema");
const { log } = require("console");

const Auth = async(req,res,next)=>{
    try {
        const {state} = req.body;
        // let reqtoken = req.headers.authorization
    //    console.log(reqtoken,"tokennnnnnnnnnnnnnnnn+================>>>>>>>>>>>>>>>>>>>>>>>>")
        const hash = crypto.createHash("sha256").update(state).digest("hex");
        console.log("hash");
        
        req.hash = hash;
        console.log("enter 13");
        
        const checkuser = await Formschemadb.findOne({hash});

            if(!checkuser){
                let secretekey = crypto.randomBytes(128).toString("hex");

                console.log(secretekey);
        
                const token = jsonweb.sign(hash,secretekey);
        
                console.log(token);
        
                const updatetoken = await Formschemadb.create({
                    hash : hash,
                    token : token,
                    secretekey: secretekey
                })

                if(updatetoken){
                    next();
                }
                // const verify = jsonweb.verify(token,secretekey)
                // console.log(verify,"verifyyyyyyyyyyyyy");
            }
           else{
             
            //    const checkuserdata = checkuser.secretekey
            //    console.log(checkuserdata,"check token");

            //     const verify = jsonweb.verify(reqtoken,checkuserdata)

            //     console.log(verify,"verify token");
                

               

               return res.status(200).json({msg:"user exists"})
           }
            // const check = await Formschemadb.findOne({hash});
            // if(check){
            //     let secretekey = check.secretekey;

            //   const verify = jsonweb.verify(reqtoken,secretekey);



            // }
            // next();
        
        
    } catch (error) {
        console.log(error.message);

        return res.status(200).json({msg:"Internal server error",code :500})
    }
}

module.exports = Auth