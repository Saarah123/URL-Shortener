const express = require("express")

const Router = express.Router()

const UrlData = require("./Sorter.Schema")



Router.get("" , async (req,  res)=>{
    try {
        const user = await UrlData.find().lean().exec();
        res.status(200).send(user)
    } catch (error) {
        console.log(error.message)
        res.status(201).send(error)
        
    }
})

Router.post("" , async (req,  res)=>{
    try {
        const user = await UrlData.create(req.body);
        res.status(200).send(user)
    } catch (error) {
        console.log(error.message)
        res.status(201).send(error)
        
    }
})


module.exports = Router