const mongoose = require('mongoose');

const ProductSchema= new mongoose.Schema({
   
    Id:{
        type: String,
        require:true,
        trim:true
    },
    name:{
        type: String,
        require:true,
        trim:true
    },
    Price:{
        type:Number,
        require:true,
        trim:true
    },
    Stock:{
        type: Number,
        trim:true
    },
    isdeleted:{
        type:Boolean,
        require:true,
        default:false
    }
   

})
const Products = mongoose.model('Products',ProductSchema);
module.exports=Products;