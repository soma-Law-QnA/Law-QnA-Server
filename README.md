# QNA - Server

## Example

JS의 fetch를 이용한 예제는 아래와 같습니다.

``` js
const endPoint = "https://qna.cdn.ntruss.com"
const callAPI = async(question) => {
    const res = await fetch(
        `${endPoint}/qna?question=${question}`,{
            method: "GET"
        }
    )
    const result = await res.json()
    console.log(result)
}
callAPI("퇴직금")
```
