const express = require("express")
const cloudinary = require("../utils/cloudinary")
const { Product } = require("../models/product")

const router = express.Router()

router.post("/", async(req, res)=>{
    const {name, brand, desc,  price, image} = req.body
    try{
        if(image){
            const uploadRes = await cloudinary.uploader.upload(image, {
                upload_preset:"onlineShop"
            })

            if(uploadRes){
                const product = new Product({
                    name,
                    brand,
                    proce,
                    image: uploadRes
                })
                const saveProduct = await product.save()
                res.status(200).send(saveProduct)
            }
        }
        }catch (error){
            console.log(error);
            res.status(500).send(error);
    }
})

router.get("/", async(req, res)=>{
    try{
        const product = await Product.find()
        res.status(200).send(product)
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports = router