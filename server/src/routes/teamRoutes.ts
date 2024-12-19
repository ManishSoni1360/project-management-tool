import { Router } from "express";
import { getTeams } from "../controllers/teaamController";

const router = Router();

router.get("/", getTeams);

export default router;
