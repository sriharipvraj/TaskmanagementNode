const mongoose = require ("mongoose")




const taskDetails=mongoose.Schema({
    Title:{type:String},
    Description:{type:String},
    DueDate:{type:String},
    Status:{type:Boolean}

}) 

const task = mongoose.model("task",taskDetails);
module.exports=task;