const express = require("express")
const PORT = process.env.PORT || 3000
const axios = require("axios")
const app = express()
app.use(express())

app.get("/sum" , function(req,res){
    const a = req.query.a
    const b = req.query.b
    res.send("got it!")
})

app.listen(port)
