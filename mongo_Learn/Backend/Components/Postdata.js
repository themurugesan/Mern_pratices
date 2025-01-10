
const Postdata = (req,res,next)=>{
  try {
    const data = req.body;

    console.log(data,"data from postdata");
     
    if(data.name){
        req.data = data;  
        next();
        // return res.status(200).json({msg:"success",code:200})
    }

    return res.status(200).json({msg:"Bad request",code:400})


  } catch (error) {
    return res.status(200).json({msg:"Internal Server Error",code:500})
  }
}

module.exports = Postdata;