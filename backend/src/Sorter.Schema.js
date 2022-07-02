const mongoose = require("mongoose")
const sortId = require("shortid")


const Url = new mongoose.Schema({
    longUrl :{type:String , required:true},
    sortUrl :{type:String , required:false , default:sortId.generate}
},
    {
    versionKey:false,
    timestamps:true
    })



    module.exports = mongoose.model("urlstore" , Url)