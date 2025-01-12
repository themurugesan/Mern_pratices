const Formschemadb = require("../Model/Formschema")

const Deleteindb=async(req,res)=>{
    try {
        const pullarr=req.body

        const check =await Formschemadb.findOne({name:pullarr.name})


        if(check){
            const chech2s = await Formschemadb.updateOne(
                { name: pullarr.name},
            {
                $unset: { "friend": ""},
                new : true
            }
            )
            if(chech2s){
                return res.status(200).json({msg:"delete success"})


            }
            console.log(chech2s)

        }
        
    } catch (error) {

        return res.status(200).json({msg:"delete unsuccess"})
        
    }
}
module.exports=Deleteindb