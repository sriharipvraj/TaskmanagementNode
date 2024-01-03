const express = require("express");
const connectDB= require("./db")
const router = require("../TaskmanagementNode/ROUTER/router")
const cors = require("cors");



const app = express();
app.use(express.json());
connectDB();
app.use(cors())
app.use("/",router)



const PORT =5000;
app.listen(PORT,()=>console.log(`SERVER IS RUNNING ON ${PORT}....`))