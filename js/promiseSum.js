// 不能修改asyncAdd方法
function asyncAdd(a,b,callback) {
    setTimeout(function(){
        callback(null, a+b)
    },1000)
}

async function sum(...rest) {
    // 取出来第一个作为初始值
    let result = rest.shift()
    // 通过for of 遍历 rest, 依次相加
    for(let num of rest) {
        // 使用promise 获取相加结果
        result = await new Promise(resolve => {
            asyncAdd(result, num, (_,res) => {
                resolve(res)
            })
        })
    }
    // 返回执行结果
    return result
}

// 执行成功，执行时长大于6秒
sum(1, 2, 3, 4, 5,6).then(res => {
    console.log(`计算结果为:${res}`)
})
