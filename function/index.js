'use strict'
let obj = {
    id: 'object',
    getId() {
        let that = this
        return function () {
            console.log('id', that.id)
        }
    }
}
globalThis.id = 'window'

obj.getId()()

setTimeout(() => {
    process.nextTick(() => {
        console.log(1)
    })
})
setTimeout(() => {
    process.nextTick(() => {
        console.log(1)
    })
})

process.nextTick(() => {
    console.log(2)
    process.nextTick(() => {
        console.log(3)
    })
})