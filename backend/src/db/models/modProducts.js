const mongoose = require('mongoose');
const validate = require('validator');

const storeSchema = mongoose.Schema({allCategories:[
        {categoryName:String ,
            slideList:[{title:String,price:String,des:String,img:String}],
            productList:[{title:String,price:String,des:String,img:String}]}
    ]}
)

const productModel = mongoose.model('Product',storeSchema);
module.exports=productModel;