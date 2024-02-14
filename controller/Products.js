const Products = require("../Models/Product");

module.exports={
    AddProducts: async (req,res)=>{
        try {
            const data = req.body;
            console.log(data,"data");
            const existingProduct = await Products.findOne({ $or: [{ name: data.name}],})
            if(existingProduct !== null){
                return res.status(409).json('This product already exists')
            }else{
                const newProduct = new  Products(data);
                await newProduct.save();
                res.status(200).json({
                    success:true,
                    message:"Product Added Successfully",
                    data:newProduct
                })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success:false,
                message:error
            })
        }
    },
    GetAllProduts:async (req,res)=>{
        try {
            const productData = await Products.find({ isdeleted: {$ne:true}})
            if(!productData){
                return res.status(404).json({
                    success:false,
                    message:"No Data Found"
                })
            }
            res.status(200).json({
                success: true,
                data: productData,
              });
        }catch (error) {
            console.log(error);
            res.status(500).json({
                success:false,
                message:error
            })
        }
    }
}