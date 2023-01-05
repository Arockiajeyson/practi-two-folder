const mongoose =require('mongoose')

const models =new mongoose.Schema({
    email:{type:String},
    password:{type:String}
})
const apps =mongoose.model('Apps',models)
module.exports=apps