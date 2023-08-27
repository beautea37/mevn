const express = require('express')
const path = require('path');
const logger = require('morgan');
const app = express()
const PORT = 12010
const _path = path.join(__dirname, './dist')
console.log(_path)

app.use('/dist', express.static(_path))
app.use(logger('tiny'));

//custom middleware
app.use((req, res, next) => {
    console.log('요청 받는 log')
    next()
})

app.get('/book/:bookName', (req, res, next) => {
    const {bookName} = req.params
    res.send(`니가 지금 읽어야 할 책 : 위기주도학습법`)
})
app.listen(PORT, ()=> {
    console.log(`서버 포트 번호 : ${PORT}`)
})