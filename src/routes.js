const router = require("express").Router()
const errors = require("utils/errors")
const qna = require("app/qna/routes")

router.get("/custom-errors", (req, res) => {
    res.json({
        errorTypes: errors.errorTypes,
        errorMessages: errors.errorMessages
    })
})

router.use("/qna", qna)

module.exports = router