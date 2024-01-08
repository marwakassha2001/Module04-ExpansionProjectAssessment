import  express, { Router } from "express";
import { AddProduct, getProduct,getAllProduct, deleteProduct, updateProduct } from "../controllers/ProductController.js";
import { authenticate,checkRole } from "../middlewares/authMidellware.js";
const router = express.Router();

router.post('/add',AddProduct);
router.get('/get/:id',getProduct)
router.get('/get',authenticate,checkRole(['chef','admin']),getAllProduct)
router.delete("/delete", deleteProduct);
router.put("/edit", updateProduct);


export default router 


