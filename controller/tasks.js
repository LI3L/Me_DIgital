import express from "express";
import Prod from "../models/product.js";
import Category from "../models/category.js";

const router = express.Router()

router.post("/add_category",async(req,res)=>{
    const{CategoryName,CategoryMainImage}=req.body;//same name in ejs
    Category.create({
        CategoryName: CategoryName,
        CategoryMainImage: CategoryMainImage
    })
    .then(resualt=>{
        console.log(resualt);
        return res.redirect('/dashboard');
    })
    .catch(err=>{
        console.log("Error",err);
        return res.redirect('/dashboard')});

})
router.post("/add_product",async(req,res)=>{
    console.log('In Product');
    const{productName,productMainImage,productPrice,isAvailable,unitInStock,categoryId}=req.body;//same name in ejs
    Prod.create({
        productName: productName,
        productPrice: productPrice,
        productMainImage: productMainImage,
        unitInStock: unitInStock,
        isAvailable: isAvailable,
        unitInStock: unitInStock,
        categoryId: categoryId

    })
    .then(resualt=> res.redirect(`/products/${categoryId}`))
    .catch(err=>{
        console.log("Error",err);
        return res.redirect("/products/"+categoryId)});

})

router.post("/edit_category/:id",async(req,res)=>{
    const id = req.params.id;
})







export default router;