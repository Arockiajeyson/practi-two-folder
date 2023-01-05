const express =require('express')
const schemas =require('./monSchema')
const app =express()
const aut =require('./tokenVer')
app.post('/',aut,async(req,res)=>{
    const d =await schemas.findOne({_id:req.user})
    console.log(d)
    res.json('ok')
})

module.exports=app