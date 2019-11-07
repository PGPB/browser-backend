import {Router} from "express";
import {e404} from "@controllers/error";


const router = Router();


// 404, keep this as the last route.
router.use("*", e404);


export default router;
