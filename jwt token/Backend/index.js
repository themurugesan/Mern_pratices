require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./Routes/Route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",router)
// app.use("/get",router)

// app.get("/muthu",(req,res)=>{
//  const arr = ["gsahg"]  
//  return res.status(200).json({arr}) 
// })

const PORT = process.env.PORT;

app.listen(PORT,()=>{
console.log(`Server is running on the PORT ${PORT}`);

})