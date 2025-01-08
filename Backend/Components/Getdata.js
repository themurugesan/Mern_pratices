const Getdata = (req,res)=>{
    try {
       const arr = [{
        name : "Kapil",
        age : 25
       },{
        name : "Muthu",
        age : 20
       },{
        name : "Ram",
        age : 29
       },{
        name : "Saran",
        age : 23
       }]
    
       return res.status(200).json({arr,code : 200})

    } catch (error) {
        return res.status(200).json({msg:"Internal server error",code : 500})
    }
}

module.exports = Getdata