const Formschemadb = require("../Model/Formschema.js");


const Formdata = async(req,res)=>{
    try {
        const {name,number} = req.body;

        const check = await Formschemadb.findOne({name : name});

        console.log(check,"checkk");
        
        if(check){
            return res.status(200).json({msg:"already exists"})
        }


        const data = await Formschemadb.create({
            name : name,
            contact : number
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