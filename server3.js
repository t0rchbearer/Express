const express=require('express')
const app=express()
app.get('/login',function(req,res){
    res.send("login detailssssss")
})
app.get('/register',function(req,res){
    res.send("register details")
})
app.listen(9090)