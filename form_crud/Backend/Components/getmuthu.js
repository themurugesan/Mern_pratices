const getmuthu = (req,res)=>{
    try {
        console.log("from getsuccess data muthu");
        return res.status(200).json({msg:"success muthuu",code : 200})

        
    } catch (error) {
        return res.status(200).json({msg:"Internal server error",code : 500})
    }
}

module.exports = getmuthu