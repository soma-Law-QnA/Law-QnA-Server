require("dotenv").config()
const errors = require("utils/errors")
const app = require("app")

app.get("/custom-errors", (req, res) => {
    res.json({
        errorTypes: errors.errorType,
        errorMessages: errors.errorMessages
    })
})
app.listen(process.env.PORT || 3000)
console.log("Server Running at http://localhost:3000")