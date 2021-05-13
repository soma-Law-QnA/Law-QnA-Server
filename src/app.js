require("dotenv").config();

const express = require("express")
const bodyParser = require("body-parser")
const routes = require("routes")


const app = express()
app.use("", routes)
app.use((err, req, res, next) => {
    if (err) {
        console.log(err)
    }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app