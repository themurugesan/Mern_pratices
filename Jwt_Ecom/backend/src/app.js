const express =require("express");
const singupRoute=require("./routes/signup")
const bodyParser =require("body-parser");



const app=express();
const PORT=process.env.PORT || 5000;
app.use(bodyParser.json())
app.use("/user",singupRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})