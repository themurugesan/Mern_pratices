const Formschemadb = require("../Model/Formschema");

const Pullarrayofobject=async(req,res)=>{
    try {
        const pullarr=req.body

        const check =await Formschemadb.findOne({name:pullarr.name})
        const deleteof=pullarr.friend

        if(check){
            const chech2s = await Formschemadb.updateOne(
            { name: pullarr.name,"friend.name":pullarr.friend.name },
            {
                $pull: {"friend": deleteof} 
            },{
                new : true
            }
          );
          console.log(chech2s)
          if(chech2s){
            return res.status(200).json({msg:"success for pull"})

          }
        }

        

    

        
    } catch (error) {
        return res.status(200).json({msg:"pull array of object"})
        
    }
}
module.exports=Pullarrayofobject