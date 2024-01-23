const express = require("express");
const router = express.Router();
const {getAllbooks,getOnebookbyId,createBooks,updateBooksById,deletBooksById}=require("./conrollre")
const upload = require("../../middllewares/multer")
const Books = require("../../models/Books")

router.param("_id",async(req,res,next,_id)=>{
   const Books = await Books.findById(-id);
   if (!Books)
   return res.status(404)
.json({message:"book with this id not found"});
req.books =Books
     next();
});



router.get("/",getAllbooks);
router.get("/:_id",getOnebookbyId)
router.post("/",upload.single("bookImage"),createBooks);
router.put("/:_id",updateBooksById);
router.delete("/",deletBooksById);



module.express=router;