const ex = require("express")
const translate = require("./translate")
const app = ex()
const cors = require("cors")
const sms = require("./sms")

app.use(cors({
    origin: ["http://localhost:3000"],
    allowedHeaders: ["Content-Type", "*"]
  }))

app.get("/translate",async(req,res)=>{
    const {input,from,to} = req.query
    res.send(await translate({
        from,
        input,
        to
    }))
})

app.get("/verify-phone/:code",async(req,res)=>{
    const {code, to} = req.params
    res.send(await sms({
        code,
        to
    }))
})

app.listen(9800,()=>console.log("on 9800"))