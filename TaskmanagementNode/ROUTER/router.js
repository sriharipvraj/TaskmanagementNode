const express = require("express")

const {taskFunction,displayFunction,editFunction,deleteFunction} = require("../CONTROLLER/controller");



const router = express.Router();


router.route("/addtask").post(taskFunction)
router.route("/gettask").get(displayFunction)
router.route("/edittask/:id").put(editFunction)
router.route("delete/:id").delete(deleteFunction)


module.exports=router;




