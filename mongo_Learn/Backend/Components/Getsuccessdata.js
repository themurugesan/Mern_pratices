const Getsuccessdata = (req,res)=>{
    try {
        console.log(req.data,"from getsuccess data");
        if(req.data.name){
            return res.status(200).json({msg:"success from get data"})
        }
    } catch (error) {
        return res.status(200).json({msg:"Internal server error",code : 500})
    }
}

module.exports = Getsuccessdata