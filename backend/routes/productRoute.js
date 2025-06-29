import express from "express";
import  {addProduct, removeProduct, listProducts, singleProduct} from "../controllers/productController.js";
import upload from "../middlewares/multer.js";
import adminAuth from "../middlewares/adminAuth.js";

const productRouter = express.Router();

productRouter.post('/add', 
    adminAuth,
    upload.fields([
        {name:'image1', maxCount:1},
        {name:'image2', maxCount1:1},
        {name:'image3', maxCount1:1},
        {name:'image4', maxCount1:1},
    ]), addProduct);

productRouter.post('/remove',adminAuth, removeProduct);
productRouter.post('/single', singleProduct);
productRouter.post('/list', listProducts);

export default productRouter