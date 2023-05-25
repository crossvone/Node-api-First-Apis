import  express  from "express";
import {getAllUsers} from "../controller/userController.js"
import {register} from "../controller/userController.js"
import {getMyDetails} from "../controller/userController.js"
import {login} from "../controller/userController.js"
import {logout} from "../controller/userController.js"
import { isAuthentication } from "../middleWears/auth.js";


const router = express.Router();


router.get("/all",getAllUsers);

router.post("/new",register);

router.post("/login",login);

router.get("/logout",logout);

router.get("/my",isAuthentication,getMyDetails);






export default router;