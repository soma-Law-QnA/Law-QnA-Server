const request = require('request');

const openApiURL = 'http://aiopen.etri.re.kr:8000/LegalQA';
const access_key = process.env.KEY;

const getQnA = async (req, res) => {
    const question = req.query.question;

    if (!question) {
        return res.status(400).json({
            result: 1,
        });
    }

    const requestJson = {
        access_key: access_key,
        argument: {
            question: question,
        }
    };

    const options = {
        url: openApiURL,
        body: JSON.stringify(requestJson),
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    };

    request.post(options,
        function (error, response, body) {
            if (error) {
                return res.status(500).json({
                    result: 1,
                });
            }

            res.json(JSON.parse(body));
        }
    );
}

module.exports = getQnA