const task = require("../SCHEMA/schema")

const taskFunction = async (req,res)=>{
    const {Title,Description,DueDate,Status}=req.body;

    const taskInfo = await task.create({
        Title,
        Description,
        DueDate,
        Status
    })
    res.json(taskInfo)
}

const  displayFunction = async (req,res)=>{
    
    const gettask  = await task.find()
    res.send(gettask);

}

const editFunction = async (req,res)=>{
    const {Title,Description,DueDate,Status}=req.body;
    const _id=req.params.id;
    const edit = await task.findByIdAndUpdate(_id,{Title,Description,DueDate,Status})
    res.json(edit);
    
}

const deleteFunction = async(req,res)=>{
    const_id=req.params.id;
    const del = await task.findByIdAndRemove({_id})
    res.send("task deleted ")

}





module.exports={taskFunction,displayFunction,editFunction,deleteFunction};