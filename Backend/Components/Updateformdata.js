const Formschemadb = require("../Model/Formschema");

const Updateformdata = async(req,res)=>{
    try {
        const {name,address,education} = req.body;
        console.log(address,"sddress");
        

        const check = await Formschemadb.findOne({name : name});


        console.log(check,"checkk");
        
        if(check){
            if(education){
                const eduupdate = await Formschemadb.findOneAndUpdate({name : name},{$push:{education}},{new:true});
                if(eduupdate){
                return res.status(200).json({msg:"education update success"})
                }
            }
          if(address){
              const update = await Formschemadb.findOneAndUpdate({name:name},{$set:{address}},{new:true});
              console.log(update,"update from data");
              
               if(update){
                   return res.status(200).json({msg:"update address success"})
               }
          }

        }

        return res.status(200).json({msg:"user not exists"})



        // if(data){
        //     return res.status(200).json({msg:"success"})
        // }
        

    } catch (error) {
        console.log(error.message);
        
        return res.status(200).json({msg:"Something went wrong",code:500})
    }
}

module.exports =Updateformdata