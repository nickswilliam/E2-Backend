import { Router } from "express";
import { createUser, getUsers, getUsersByDni } from "../controllers/costs";

const router = Router();

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:dni', getUsersByDni)

export default router