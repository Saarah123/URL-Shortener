const express= require("express")
const { append } = require("express/lib/response")
const router= express.Router()
const ShortnerUrl= require("../models/shortener.model")
const shortId= require("shortid")

router.get("" ,async(req,res)=>{
     try {
         const urls=  await ShortnerUrl.find().lean().exec();
         res.status(200).send(urls)
     } catch (error) {
         res.status(404).send({message:error.message})
     }
})

router.post("" ,async(req,res)=>{
    try {
        const url=  await ShortnerUrl.create({
            fullUrl:req.body.fullUrl,
            shortUrl:req.body.shortUrl || shortId.generate()
        });
        res.status(201).send(url)
    } catch (error) {
        res.status(404).send({message:error.message})
    }
})


module.exports=router