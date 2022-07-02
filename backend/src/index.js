const express = require("express")
const connect = require('./configs/db')
const shortnerController= require("./controllers/shortener.controller")
const cors= require("cors")
const app= express();
app.use(express.json())
app.use(cors())
app.use("/shortUrls" ,shortnerController)










app.listen( process.env.PORT ||8888,async()=>{
      try {
          await connect()
          console.log("listening the port 8888")
      } catch (error) {
          console.log(error.message)
      }
})