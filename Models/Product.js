const mongoose = require('mongoose');

const ProductSchema= new mongoose.Schema({
   
    id:{
        type: String,
        required:true,
        trim:true
    },
    name:{
        type: String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    stock:{
        type: Number,
        trim:true
    },
    isdeleted:{
        type:Boolean,
        required:true,
        default:false
    }
   

})
const Products = mongoose.model('Products',ProductSchema);
module.exports=Products;