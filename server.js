const express = require('express')
const app = express()
app.use(date =(req,res,next)=>{
    let requestAT = new Date()
    let heure = requestAT.getHours()
    if(heure < 8 || heure > 17){
        res.send("page is locked")
    }
    else{
        next()
    }
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + "/public/contact.html")
})
app.get('/ourservices',(req,res)=>{
    res.sendFile(__dirname + "/public/ourservices.html")
})
app.get('/home',(req,res)=>{
    res.sendFile(__dirname + "/public/home.html")
})

app.listen(5000,(err) => {
    if(err){throw err}
    else{console.log("server is running ...")}
} ) 
