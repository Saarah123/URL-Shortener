const mongoose= require("mongoose")
const shortId= require("shortid")

const shortnerSchema= new mongoose.Schema({
    fullUrl:{type:String , required:true},
    shortUrl:{type:String, required:false, default:shortId.generate}
},{

    versionKey:false,
    timestamps:true
})
module.exports = mongoose.model("shortUrl",shortnerSchema)