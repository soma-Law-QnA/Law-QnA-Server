// require("dotenv").config()
const app = require("app")
app.listen(process.env.PORT || 3000)
console.log("Server Running at http://localhost:3000")