import express from "express";
import  {addProduct, removeProduct, listProducts, singleProduct} from "../controllers/productController.js";
import upload from "../middlewares/multer.js";

const productRouter = express.Router();

productRouter.post('/add',
    upload.fields([
        {name:'image1', maxCount:1},
        {name:'image2', maxCount1:1},
        {name:'image3', maxCount1:1},
        {name:'image4', maxCount1:1},
    ]), addProduct);

productRouter.post('/remove', removeProduct);
productRouter.post('/single', singleProduct);
productRouter.post('/list', listProducts);

export default productRouter