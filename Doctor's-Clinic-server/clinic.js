const express = require("express")
const port = 3000
const app = express()

//the patient array we have defined here is an in memory type of db in which data gets lost once the system is refreshed , thats why it is recoemmnded to use dbs like mogo db and postgre
const patient = [{
    name : "mukeswa" ,
    kidney : [{
        health : false
    }]
}]

app.get("/" , function(req,res){
    let mukeshkidney = patient[0].kidney
    const numberofkidneys = mukeshkidney.length
    let healthykidneys = 0
    for(let i = 0 ; i < numberofkidneys  ; i++){
        if(mukeshkidney[0].health) {
            healthykidneys = healthykidneys + 1
        }
    }
    const unhealthykidney = numberofkidneys - healthykidneys
    res.json({
        numberofkidneys,
        healthykidneys,
        unhealthykidney
    })
})

app.use(express.json())

app.post("/" , function(req,res){
    const ishealthy = req.body.ishealthy
    patient[0].kidney.push({
        health : ishealthy
    })
    res.json({
        msg : "done"
    })
})

app.put("/" , function(req,res){
    for(let i = 0 ; i<patient[0].kidney.length ; i++){
        patient[0].kidney[i].health = true
    }
    res.json({})
})

app.delete("/" , function(req,res){
    
    res.json({})
})

app.listen(port)
