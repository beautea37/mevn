//express를 통해 app.use 매개변수로 morgan을 넣으면 logging middleware 설정이 가능함.

const express = require('express');
const app = express()
const loogger = require('morgan')        //logger에 morgan 모듈 함수 담기
const PORT = 3000;

app.use(loogger('tiny'));       //매개변수 설정. 로그 형식
app.use((req, res, next) => {
    console.log('1 Time: ', Date.now());
    next();
})
app.use((req, res, next) => {
    console.log('2 Time: ', Date.now());
    next();
})

app.listen(PORT, ()=> {
    console.log(`서버 생성 완료. ${PORT}`);
});