import { Router } from "express";
import { createProdcut } from "./handlers/product";

const router = Router();

router.post('/', createProdcut);

export default router;