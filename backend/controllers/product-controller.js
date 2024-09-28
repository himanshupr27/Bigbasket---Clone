import productModel from "../models/product-model.js";
import ApiFeatures from "../utils/apifeatures.js"
// create new products
const createProduct =async(req,res)=>{
    const product =await productModel.create(req.body);
    res.status(201).json({
        sucess:true,
        product
    })
}
const deletProduct =(res,req)=>{
}
const editProduct =(res,req)=>{
} 

// get all products
const getAllProduct = async (req, res) => {
    try {
     const resultPerPage = 8;
      const apiFeatures = new ApiFeatures(productModel.find(), req.query)
        .search()
        .filter();
        let products = await apiFeatures.query;
        const productCount = products.length;
        apiFeatures.pagination(resultPerPage);
        products = await apiFeatures.query.clone();;
        
      res.status(200).json({ 
        success: true,
        products,
        resultPerPage,
        productCount,
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: error.message 
      });
    }
  }

//get product details
const getProductDetails = async(req,res)=>{
    const products = await productModel.findById(req.params.id);
    if(!products){
        res.status(404).json({msg:"product not found"});
    }
    res.status(200).json({
        sucess:true,
        products,
    })
}

 export {getAllProduct,createProduct,editProduct,deletProduct,getProductDetails};