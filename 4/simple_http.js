const http = require('http');
const PORT = 12010      // // ##포트번호 설정
const server = http.createServer((req, res) => {        //create 메서드를 통해 서버 생성
    res.setHeader('Content-Type', 'application/json; charset=utf-8')  //응답값을 json으로 받겠다는 헤더정보 설정
    // res.end('MEVN stack project');      //요청에 대한 응답으로 문자열 보내는 부분. 매개변수로 버퍼, 문자열이 가능함.
    const obj = {
        "프로젝트명" : "MEVN"
    }
    res.end(JSON.stringify(obj))
})

//서버를 자동적으로 중지시키게끔 하는 코드
setTimeout(() => {
    JSON.parse("{Z")
}, 10000)
server.listen(PORT, () => {     //listen을 통해 http 서버 실행 가능
    console.log(`Server running at http://127.0.0.1:${PORT}`);
})

