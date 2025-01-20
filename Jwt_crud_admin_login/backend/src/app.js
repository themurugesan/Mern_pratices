const express =require("express");
const singupRoute=require("./routes/signup")
const loginRoute=require("./routes/login")
const userRoute=require("./routes/user")
const productRoute=require('./routes/product')
const bodyParser =require("body-parser");
const cors=require("cors")
const createAdminAccount=require("./scripts/admin")

const app=express();
const PORT=process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors())
createAdminAccount();
app.use("/user",singupRoute);
app.use("/auth",loginRoute);
app.use("/api",userRoute)
app.use("/api",productRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})