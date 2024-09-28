import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router/auth-router.js";
import contRouter from "./router/contact-router.js"
import productRouter from "./router/product-router.js"
import connectDB from "./db.js";
import errorMiddleware from "./middlewares/error-middleware.js";
import env from "dotenv";
env.config();
const app=express();
const PORT=4000;

const CorsOption={
    origin:process.env.FRONTEND_SERVER,
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
  };

  app.use(cors(CorsOption));

  app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());


app.use("/api/auth",router);
app.use("/api/form",contRouter);
app.use("/api/product",productRouter);

app.use(errorMiddleware);
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is running at ${PORT}`)
    });
});