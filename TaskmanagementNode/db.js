const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://sriharipvraj:7560860640s@cluster0.mcxgulr.mongodb.net/",{
            useNewUrlParser:true,
            useUnifiedTopology:true,

        })
        console.log("Database connected");
    }catch(error){
        console.log(`Error:${error}`);

        process.exit();
    }
}

module.exports=connectDB;