export default curry(function * filterL(f, iter) {
    for(const a of toIter(iter)) {
        const b = go1(a, f)
        if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(nop))
        else if(b) yield a
    }
})

//filterL, mapL, takeL을 통해 제너레이터 로직 구현을 순차적으로 할 수 있음.
//웹 스크래핑을 request해 쓰면 된다.
