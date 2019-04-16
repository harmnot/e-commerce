import express from "express";
const router = express.Router();
import { PersonService, ProductService } from "../controller/index.js";
import authentic from "../middleware/authentication";
import auhthorization from "../middleware/authorization";

router.get("/listproducts", ProductService.listproducts);
router.post(
  "/addproduct",
  authentic,
  auhthorization,
  ProductService.addProduct
);
router.put("/update/:id", authentic, auhthorization, ProductService.updated);
router.delete(
  "/delete/:id",
  authentic,
  auhthorization,
  ProductService.deleteProduct
);

router.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ error: err.message });
  }
});
export default router;
