import express from "express";
import  {addProduct, removeProduct, listProducts, singleProduct} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post('/add', addProduct);
productRouter.post('/remove', removeProduct);
productRouter.post('/single', singleProduct);
productRouter.post('/list', listProducts);

export default productRouter