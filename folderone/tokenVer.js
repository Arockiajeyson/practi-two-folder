const jwt =require('jsonwebtoken')

const token = (req,res,next)=>{
    try {
        const tokens =req.headers.authorization //headers.authorization
        console.log(tokens)
        if(tokens){
            const ver =jwt.verify(tokens,'s')
            if(ver){
                req.user =ver.id
            }
            next()
        }
    } catch (error) {
        res.json(error.message)
    }
}
module.exports=token;