const express = require("express");
const app = express();
const fs = require("fs");
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:true}))


app.get('' , (req , res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/addition' , (req , res)=>{
    const n1 = Number(req.body.num1)
    const n2  = Number(req.body.num2)
    const n3  = Number(req.body.num3)
    const n4  = Number(req.body.num4)
    const n5  = Number(req.body.num5)
    const add = n1 + n2 + n3 + n4 + n5
    res.send('The value is: ' + add)
})

app.post('//multplication' , (req , res)=>{
    const num1 = Number(req.body.number1)
    const num2  = Number(req.body.number2)
    const num3  = Number(req.body.number3)
    const num4  = Number(req.body.number4)
    const num5  = Number(req.body.number5)
    const add = num1 * num2 * num3 * num4 * num5
    res.send('The value is: ' + add)
})




app.listen(3000  , ()=>{
    console.log('listening at port 3000')
})