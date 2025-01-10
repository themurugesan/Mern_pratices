const axios=require("axios");
const Regexcheck = require("../Utils/Regex");


const postmongo =async(req,res)=>{
try {
    const details = req.body

    console.log(details.name);
    console.log(details.contact);
 const Nameregex = Regexcheck("name",details.name);
console.log(Nameregex);

 if(!Nameregex){
  return res.status(200).json({msg:"Check details"})
 }
console.log(Nameregex);


    const contactRegex=/[0-9]{10}/;
    if(!contactRegex.test(details.contact)){
        return res.status(400).json({msg:"contact number must 10 digit"})
    }
    await axios
      .post("http://localhost:4000/api/formdata",details)
      .then((response) => {
        console.log(response)
        return res.status(200).json(response.data)
        
        
      })
      .catch((err) => {
        console.log(err);
        return res.status(200).json(err.message)
      });
    

    


    // return res.status(200).json({msg:"Sucess",code:200})

    
} catch (err) {
    return res.status(200).json({msg:"Something went wrong",code:500})
    
}
}
module.exports =postmongo