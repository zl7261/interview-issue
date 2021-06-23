function throttle(fn, time) {
    let runFlag = true
    return function (...args) {
        if (!runFlag) return
        fn.apply(this, args)
        runFlag = false
        setTimeout(() => {
            runFlag = true
        }, time)
    }
}


// 测试
const task = () => {
    console.log('run task')
}
const throttleTask = throttle(task, 1000)

throttleTask()
setTimeout(() => {
    throttleTask()
}, 500)
setTimeout(() => {
    throttleTask()
}, 1500)
setTimeout(() => {
    throttleTask()
}, 2000)
setTimeout(() => {
    throttleTask()
}, 4000)
