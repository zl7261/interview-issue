const sleep = (time) => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function testSleep() {

    console.log(new Date().getSeconds())
    setTimeout(() => {
        console.log(100)
    }, 1000)
    await sleep(2000)
    setTimeout(() => {
        console.log(100)
    }, 1000)
    console.log(new Date().getSeconds())
}

testSleep()