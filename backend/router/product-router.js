import express from "express";
import {getAllProduct,createProduct,editProduct,deletProduct,getProductDetails} from "../controllers/product-controller.js"
// import productSchema from "../validators/product-validator.js";
// import validate from "../middlewares/validator-middleware.js";

const router=express.Router();
// get all products
router.route("/getall").get(getAllProduct);
// create a product -->admin
//validate(productSchema),-------|
router.route("/create/new").post(createProduct);
router.route("/prod/:id").get(getProductDetails);
export default router;