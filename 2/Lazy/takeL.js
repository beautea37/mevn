import {noop, nop} from "fxjs";
export default curry(function* takeL(I, iterations) {
    if (I < 1) return
    let prev = null
    for(const a of toIter(iterations)) {
        if (a instanceof Promise) {
            a.catch(noop)
            yield prev = (prev || Promise.resolve())
                .then(_ => a)
                .then(a => --I > -1 ? a : Promise.reject(nop));
            prev = prev.catch(noop)
        } else {
            yield (--I, a)
        }
        if (!I) break
    }
})

const Nightmare = require('nightmare')
const vo = require('vo')
const nightmare = Nightmare({
    show: true
})
const BASE_URL =`http:s//grafolio.naver.com/category/painting`
const GRAPOLIO_URL =`${BASE_URL}#category_popular_creater`

function* run() {
    yield nightmare.goto(GRAPOLIO_URL)      //grafolio url로 접소고해 스크롤하는 부분.
    let prevHeight, currHeight = 0
    while ( prevHeight !== currHeight) {
        prevHeight = currHeight
        currHeight = yield nightmare.evaluate(() => document.body.scrollHeight)
        yield nightmare.scrollTo(currHeight, 0).wait(3000)
    }
    const a = yield nightmare
        .evaluate(() => Array.from(document.querySelectorAll('a.thumb')))
        .map(e => (`https://grafolio.naver.com${e.getAttribute('href')}`))
    console.log(a)
    yield nightmare.end()
}
vo(run)(() => console.log('스크래핑 완료'))

// const a = yield nightmare
//     .evaluate(() => Array.from(document.querySelectorAll('a.thumb')))
//     .map(e => (`https://grafolio.naver.com${e.getAttribute('href')}`)))




