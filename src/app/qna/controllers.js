const request = require('request');

const openApiURL = 'http://aiopen.etri.re.kr:8000/LegalQA';
const access_key = process.env.KEY;

const RecommandURLPrefix = 'https://www.law.go.kr/LSW/unSc.do?query=';

const makeRecommandURL = (source) => {
    const words = source.split(' ');
    let url = "";
    for (let word of words) {
        url += word;
        if (word.includes("법")) {
            break;
        }
    }
    return RecommandURLPrefix + url;
};

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
            // console.log(body);

            const result = JSON.parse(body);
            if (result.return_object) {
                for (const item of result.return_object.LegalInfo.AnswerInfo) {
                    item.recommandURL = makeRecommandURL(item.source);
                }
            }

            res.json(result);
        }
    );
}

module.exports = getQnA