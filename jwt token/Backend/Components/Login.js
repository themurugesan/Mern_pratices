const Formschemadb = require("../Model/Formschema")

const Login =async(req,res)=>{
    try {
        
  let hash = req.hash;
       const gettoken = await Formschemadb.findOne({hash});             

       if(gettoken)
        return res.status(200).json({msg:"user login success",token:gettoken.token})



    } catch (error) {
        console.log(error.message);
        
        return res.status(200).json({msg:"Internal server error",code :500})

    }
}
module.exports = Login