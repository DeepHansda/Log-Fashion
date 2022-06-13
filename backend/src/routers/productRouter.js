const express = require('express');
const productRouter = new express.Router();
const ProductModel = require('../db/models/modProducts')
const auth = require('../middleware/auth')



// add products(-------------------------------------------//
productRouter.post('/admin',async(req,res)=>{
    try {
        const product = new ProductModel(req.body);
        const savedProduct = await product.save();
        res.status(200).send(savedProduct);
    }

    catch(err) {
        res.status(500).send(err)
        console.log(err)
    }
})

// -----------------------------------------------------------) add products//





// update products(-------------------------------------------------------//
productRouter.patch('/admin',async(req,res)=>{
    try{
        const _id = req.params.id;
        const patchProduct = await ProductModel.updateMany(_id,req.body,{
            new:true
        });
        res.status(200).send(patchProduct)
    }
    catch(err) {
        res.status(500).send(err)
        console.log(err)
    }
})



//-----------------------------------------------------------)update products//

productRouter.put('/admin/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const putProduct = await ProductModel.findByIdAndUpdate(_id,req.body,{
            new:true
        });

        res.status(200).send(putProduct)
    }
    catch(err) {
        res.status(500).send(err)
    }
})

// get all products(--------------------------------------------------//
productRouter.get('/admin',async(req,res)=>{
    try{
        const viewProduct = await ProductModel.find();
        res.status(200).send(viewProduct)
    }

    catch(err){
        res.status(500).send(err)
        console.log(err)
    }


})

// --------------------------------------------------------------) get all products//

module.exports = productRouter;