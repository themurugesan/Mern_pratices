

const postmongo =(req,res)=>{
try {
    const {name} = req.body
    console.log(name);

    


    return res.status(200).json({msg:"Sucess",code:200})

    
} catch (err) {
    return res.status(200).json({msg:"Something went wrong",code:500})
    
}
}
module.exports =postmongo