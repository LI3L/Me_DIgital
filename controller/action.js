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
router.get("/delete_category/:id",async(req,res)=>{
    const id = req.params.id;
    Category.destroy({where: {id: id}});
    res.redirect('/dashboard');
})
router.get("/products/:id",async(req,res)=>{
    const id = req.params.id;
    Category.findByPk(id)
    .then(category=>{
        Prod.findAll({where:{categoryId: id}})
        .then(products=>{
            Category.findAll()
            .then(categories=>{
                res.render('products',{
                    pageTitle: 'Edit'+ category.CategoryName+"s",
                    category: category,
                    products: products,
                    categories: categories
                })
            })
        

        })
    })
    .catch(err=>{
        res.render('index',{
            pageTitle: 'Welcom to Me digital'
        });
    });
})







export default router;