const router = require("express").Router()
const errors = require("utils/errors")

router.get("/custom-errors", (req, res) => {
    res.json({
        errorTypes: errors.errorTypes,
        errorMessages: errors.errorMessages
    })
})

module.exports = router