const express = require("express")
const bodyParser = require("body-parser")
const routes = require("routes")
const errors = require("utils/errors")

const app = express()
app.use("", routes)
app.use((err, req, res, next) => {
    if (err) {
        console.log(err)
    }
})

app.get("/custom-errors", (req, res) => {
    res.json({
        errorTypes: errors.errorTypes,
        errorMessages: errors.errorMessages
    })
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app