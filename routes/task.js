// importing modules
const express = require("express");
// initializing router
const router = express.Router();
// importing controller
const controller = require("../controllers/taskController");

// redirecting requests to the coresponding controller
router.post("/create", controller.create);
router.get("/list", controller.getTaskList);
router.put("/update/:taskId", controller.updateTask);
router.delete("/delete/:taskId", controller.deleteTask);

// exporting as router
module.exports = router;
