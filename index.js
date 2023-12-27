const express = require("express")
const cors = require("cors")
const playerRoute = require("./Routes/playerRoute")
const gameRoute = require("./Routes/gameRoute")


const app = express()

app.use(express.json())
app.use(cors())


app.use("/api/users",playerRoute)
app.use("/api/room",gameRoute)

app.get("/", (req,res)=>{
    res.send("Hello from API")
})

const port = process.env.PORT || 5001;

app.listen(port, (req,res)=>{
    console.log("server is running on port "+port)
})