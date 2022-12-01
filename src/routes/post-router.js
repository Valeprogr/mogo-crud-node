import { Router } from "express";
import PostControllers from "../controllers/PostControllers.js";

const router = new Router();

router.post("/posts", PostControllers.create)
router.get("/posts",PostControllers.getAll)


export default router;