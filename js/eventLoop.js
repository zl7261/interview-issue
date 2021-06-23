async function async1() {
    console.log("2 async1 start");
    await async2()
    // 微任务 之后的代码可以理解为promise.then中的方法
    console.log("6 async1 end");
}

async function async2() {
    // 主线程
    console.log("3 async2");
}

// 主线程
console.log("1 script start");
setTimeout(function () {
    // 宏任务
    console.log("8 setTimeout");
}, 0)
// 主线程
async1()

new Promise(function (resolve) {
    // 主线程
    console.log('4 promise1');
    resolve()
}).then(function () {
    // 微任务
    console.log('7 promise2');
})

// 主线程
console.log('5 script end');