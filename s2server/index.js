require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./Route/route");

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api",routes)
const port=process.env.PORT

app.listen(port,()=>{
    console.log(`Server is running on the PORT ${port}`);
    
    })
