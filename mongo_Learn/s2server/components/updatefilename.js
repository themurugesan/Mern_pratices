const updatefilename=async(req,res)=>{
    try {
       const file= req.body
       
       const check = await Formschemadb.findOne({name : file.name});

       
    } catch (error) {
        
    }

}
module.exports=updatefilename