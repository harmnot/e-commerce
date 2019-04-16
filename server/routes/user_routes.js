import express from "express";
const router = express.Router();
import { PersonService, ProductService } from "../controller/index.js";

router.post("/register", PersonService.register);
router.post("/login", PersonService.login);

router.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ error: err.message });
  }
});
export default router;
