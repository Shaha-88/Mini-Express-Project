const Books = require("../../models/Books");


const getAllbooks= async(req,res,next)=> {
    try{const Books = await Books.find()
    return res.json(Books);
    }catch(error){
      next(error)}};

    

    const getOnebookbyId =async(req,res,next)=>{
        try{
        return res.status(200).json(req.Books);
        }catch(error){
            next(error);
        } 
       };
    
       const createBooks = async(req,res,next)=>{
        try{ 
            if(req.file){
                req.body.image=req.file.path;
            }
            const Books=await Books.create(req.body);
            return res.status(201).json(Books);
        }catch(error){
           next(error);
        }};

const updateBooksById= async(req,res,next)=> {
try{
    await req.Books.updateOne(req.body);
    return res.status(204).end();
} catch(error){
    console.log(error);
   next(error);
}};


    const deletBooksById =async(req, res,next) => {
       try{ 
     await req.Books.deletOne();
    return res.status(204).end();
       } catch(error){
        next(error);
       }}


    module.exports={
        getAllbooks,
        getOnebookbyId,
        createBooks,
        updateBooksById,
        deletBooksById,
        }