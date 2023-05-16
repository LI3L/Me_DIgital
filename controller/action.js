import express from "express";
import Prod from "../models/product.js";
import Category from "../models/category.js";


const router = express.Router()

router.get("/dashboard",async(req,res)=>{
    Category.findAll()
    .then(categories=>{
        res.render('index',{
            pageTitle: 'Welcom to Me digital',
            categories: categories
        })
    })
    .catch(err=>{
        res.render('index',{
            pageTitle: 'Welcom to Me digital'
        });
    });
})






export default router;