
const express = require('express');
const app = express()
const loogger = require('morgan')
const PORT = 3000;

app.use(loogger('tiny'));

const simple_module = require('./simple_module.js')
app.get('/', simple_module.intro);
app.get('/users/:userName/books/:bookName', simple_module.handleBook);

app.listen(PORT, () => {
    console.log(`서버 생성 완료. 포트 번호 ${PORT}`);
})
