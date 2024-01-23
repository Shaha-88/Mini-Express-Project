const mongoose = require("mongoose");
const dotenv=require("mangoose");
dotenv.config();
const connectDB= async()=>{
    try { await mongoose.connect(process.env.MONGODB_LINK),
cosole.log("connected to DB")}
catch(error){cosole.log("could not to db",error)};

}

module.exports = connectDB;