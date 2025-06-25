import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import router from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.get("/", (req, res) => {
    res.send("API working...")
})

//routes
app.use("/api/user", router);
app.use("/api/product", productRouter);

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})
