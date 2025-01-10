const Formschemadb = require("../Model/Formschema")

const Pullrequest=async(req,res)=>{
    try {
        const pulls=req.body

        const check= await Formschemadb.findOne({name:pulls.name})

        if(check){
            console.log("enter");
            const chech2s = await Formschemadb.updateOne(
                { name: pulls.name },
                {
                    $pull: {"numbers": { $gte: 6 } } 
                },{
                    new : true
                }
              );
              console.log(chech2s)

        }
        return res.status(200).json({msg:"success for pull"})

    } catch (error) {

        return res.status(200).json({msg:"pull request error"})
        
    }
}
module.exports=Pullrequest