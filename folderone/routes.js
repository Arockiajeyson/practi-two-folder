const express =require('express')
const jwt =require('jsonwebtoken')
const bcrypt =require('bcrypt')
const app =express()
const schemas =require('./monSchema')
app.post('/register',async (req,res)=>{
    try {
        const finding =await schemas.findOne({email:req.body.email})
        if(finding){
            return res.json('Already exist Enter new one')
        }
        const {email,password} =req.body
        if(email && password){
            const hashing = await bcrypt.hash(password,10)
            req.body.password=hashing
            const data =await schemas.create({
                email:req.body.email,
                password:req.body.password
            })
            return res.json('successfully Register')
        }else{
            return res.json('fill all fields')
        }
    } catch (error) {
        res.json(error.message)
    }
})
app.post('/login',async(req,res)=>{
    try {
        const finding =await schemas.findOne({email:req.body.email})
        if(finding){
            const comparing =await bcrypt.compare(req.body.password,finding.password)
            if(!comparing){
                return res.json('invalid password')
            }else{
                const tokenCreate =await jwt.sign({
                    id:finding._id
                },'s')
                return res.json(['logged-in',tokenCreate])
            }
        }else{
            return res.json('register first')
        }
    } catch (error) {
        return res.json(error.message)
    }
})
module.exports=app