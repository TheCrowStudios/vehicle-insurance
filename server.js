const express = require("express")
const http = require("http")
const https = require("https")

const app = express()

app.set("view-engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public/"))

app.get("/", (req, res) => {
    console.log(req.ip)
    res.render("index.ejs")
})

app.post("/", (req, res) => {
    console.log(req.ip)
    console.log(req.body)
    res.redirect("/")
})

http.createServer(app).listen(80)