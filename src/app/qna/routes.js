const getQnA = require("app/qna/controllers")
const router = require("express").Router()

router.get("/", getQnA)

module.exports = router