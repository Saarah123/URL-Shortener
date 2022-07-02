const express = require("express")
var cors = require('cors')
const App = express()
App.use(cors())

App.use(express.json())
const connect = require("./db")

const UserControler = require("./Sorter.controller")


App.use("/sortUrl" , UserControler)


App.listen(  process.env.PORT || 5000 , async()=>{
    try {
        await connect()
        console.log("Connected")
    } catch (error) {
        console.log(error)
    }
})