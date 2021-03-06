const assert = require("assert")
const request = require("supertest")
const app = require("app")
const errors = require("utils/errors")

describe("QnA API Test", () => {
    it("Normal Request", async () => {  
        const response = await request(app)
            .get('/qna')
            .query({ question: '퇴직금' })
            .expect(200)
        
        // console.log(response.body);
        // console.log(response.body.return_object.LegalInfo);
        assert.strictEqual(response.body.result, 0 , '성공시, result는 0이다.');
        assert(response.body.return_object.LegalInfo.AnswerInfo.length <= 5, '법률 정보가 5개 이하로 온다.');
    }).timeout(5000);
    it("Normal Request Recommand", async () => {  
        const response = await request(app)
            .get('/qna')
            .query({ question: '대법원장의 임기는 몇년인가?' })
            .expect(200)
        
        // assert.strictEqual(response.body.result, 0 , '성공시, result는 0이다.');
        for(let item of response.body.return_object.LegalInfo.AnswerInfo) {
            assert(!!item.recommandURL, 'recommandURL이 유효한 값을 가진다.')
            // console.log(item.recommandURL);
        }
    }).timeout(5000); 
    it("Empty Query Request", async () => {  
        const response = await request(app)
            .get('/qna')
            .expect(400)

        // console.log(response.body);
        assert.strictEqual(response.body.result, 1 , '실패시, result는 1이다.');
    }).timeout(5000); 
})