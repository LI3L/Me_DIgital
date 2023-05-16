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






export default router;