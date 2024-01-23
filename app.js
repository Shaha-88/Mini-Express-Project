//import
const express= require("express");
const connectDB=require("./database");
const app =express();
const BooksRouter=require("./api/Books/routs");
let Books= require("./Books")
const morgan = require("morgan");
const cors =require("cors");
//midllewares
app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

// my router
app.use("/api/Books",BooksRouter);

//not found handler
app.use((req,res,next)=>{
    return res.status(404).json({message: "Path not found!"});
});
//error handler
app.use((err,req,res,next)=>{
    return res.status(err.status || 500).json(err.message || "server error!!")
})


const PORT= 8002;
connectDB();
app.listen(PORT,()=>{
    console.log("server is running");
})











