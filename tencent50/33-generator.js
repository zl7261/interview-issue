function* geFn() {
    return new Date()
}

const g = geFn()
console.log(g.next())

function* yieldFn() {
    yield '1:' + 1
    yield '2:' + 2
    return 'end:' + 3
}

const y = yieldFn()
try {
    console.log(y.next()) // { value: '1:1', done: false }
    console.log(y.throw(1)) //  throw new Error('1')
} catch (e) {
    console.log(e) // 1
}
