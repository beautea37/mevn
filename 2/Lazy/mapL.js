export default curry(function * mapL(f, iter) {
    for (const a of toIter(iter)) yield go1(a, f)
})

