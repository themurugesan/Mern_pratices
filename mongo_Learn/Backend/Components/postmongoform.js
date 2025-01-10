const postmongoform=(req,res)=>{
    
    if (!nameRegex.test(name)) {

        return res.status(400).json({ msg: "Name must contain only alphabets and spaces." });
    }
}


module.exports=postmongoform