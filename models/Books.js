const { Schema, model } = require ("mangoose");


const BooksSchema= new Schema({

    title: { type: String,required: true},
    auther: { type: String,required: true},
    price: { type: Number,default:5},
    image: String,
});


module.exports = model ("Books",BooksSchema);