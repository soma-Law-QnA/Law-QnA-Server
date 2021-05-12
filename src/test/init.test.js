const assert = require("assert")
const request = require("supertest")
const app = require("app")
const errors = require("utils/errors")

describe("Server Running Test", () => {
    it("Get 404", async () => {
        await request(app)
            .get("/")
            .expect(404)
    })
    it("Get custom-errors", async () => {
        const result = await request(app)
            .get("/custom-errors")
            .expect(200)
        assert.deepStrictEqual(result.body.errorTypes, errors.errorTypes)
        assert.deepStrictEqual(result.body.errorMessages, errors.errorMessages)
    })
})