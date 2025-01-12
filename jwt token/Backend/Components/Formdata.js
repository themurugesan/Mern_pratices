const Formschemadb = require("../Model/Formschema.js");


const Formdata = async(req,res)=>{
    try {
        const {name,contact,address,education,numbers,friend} = req.body;
        console.log(address,"sddress");
        let hash = req.hash

        const check = await Formschemadb.findOne({hash});

    
        console.log(check,"checkk");
        
        if(check){
            return res.status(200).json({msg:"already exists"})
        }


        const data = await Formschemadb.create({
            name : name,
            contact : contact,
            address : address,
            education:education,
            numbers:numbers,
            friend:friend,
            hash : req.hash
        })

        console.log(data);

        if(data){
            return res.status(200).json({msg:"success"})
        }
        

    } catch (error) {
        console.log(error.message);
        
        return res.status(200).json({msg:"Something went wrong",code:500})
    }
}
const GetFormdata = async(req,res)=>{
    try {
      
        const data = await Formschemadb.find().select("name -_id");

        console.log(data,"find data");
        
        if(data){
            return res.status(200).json({msg:"success",data})
        }

    } catch (error) {
        console.log(error.message);
        
        return res.status(200).json({msg:"Something went wrong",code:500})
    }
}

module.exports = {Formdata,GetFormdata}