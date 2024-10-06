import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import conncectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/proudctRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

//App Config

const app = express();
const port =  process.env.PORT || 4000
connectDB()
conncectCloudinary()


//middlewares

app.use(express.json())
app.use(cors())
// const allowedOrigins = [
//     'https://ecommerce-front-mauve-sigma.vercel.app',
//     'https://ecommerce-admin-psi-five.vercel.app'  // Add your second origin here
// ];

// app.use(cors({
//     origin: allowedOrigins
// }));

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API is successfullyy Working!!!")
})

app.listen(port,()=>{console.log("server is up and running at PORT :"+port)})