import  express  from "express";
import {deleteTask, newTask, updateTask} from "../controller/taskController.js"
import {getMytask} from "../controller/taskController.js"
import { isAuthentication } from "../middleWears/auth.js";

const router = express.Router();

router.post("/new", isAuthentication, newTask);

router.get("/all", isAuthentication, getMytask);

router.put("/:id", isAuthentication, updateTask);

router.delete("/:id", isAuthentication, deleteTask);

export default router;