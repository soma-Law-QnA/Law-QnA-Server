const error = {
    ["UnexpectedError"]: "An unexpected error occurred.",
    ["ValidationError"]: "The data you sent is not valid.",
}

module.exports = {
    error,
    errorTypes: [
        "UnexpectedError",
        "ValidationError"
    ],
    errorMessages: [
        "An unexpected error occurred.",
        "The data you sent is not valid."
    ]
}