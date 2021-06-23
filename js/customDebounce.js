function debounce(fn, time) {
    let debounceId

    return function (...args) {
        if (debounceId) {
            clearTimeout(debounceId)
        }

        debounceId = setTimeout(() => {
            fn.apply(this, args)
        }, time)
    }
}

// 测试
const task = () => {
    console.log('run task')
}

const debounceTask = debounce(task, 1000)

debounceTask()
setTimeout(() => {
    debounceTask()
}, 500)
setTimeout(() => {
    debounceTask()
}, 1000)
setTimeout(() => {
    debounceTask()
}, 2000)
setTimeout(() => {
    debounceTask()
}, 2000)
