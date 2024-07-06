const express=require('express')
const app=express()
app.get('/products/:cricket',function(req,res){
    res.send(`viewing the ${req.params.cricket}`)
})
app.listen(9091)