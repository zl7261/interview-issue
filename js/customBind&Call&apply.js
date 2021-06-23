Function.prototype.myCall = function (...args) {
    let that = args[0]
    // 没有传递that的情况
    if (!that) {
        that = (function () {
            return this
        })()
    }
    // this为执行call的函数
    that.calledFn = this
    // call可以传递多个参数
    let calledParams = args.slice(1)
    // 执行calledFn
    that.calledFn(calledParams)
}
Function.prototype.myApply = function (...args) {
    let that = args[0]
    if (!that) {
        that = (function () {
            return this
        })()
    }
    that.applyFunc = this
    let applyParams = args[1]
    that.applyFunc(applyParams)
}
Function.prototype.myBind = function (...args) {
    let that = args[0]
    if (!that) {
        // globalThis
        that = (function () {
            return this
        })()
    }
    that.bindFunc = this
    let bindParams = args.slice(1)
    return function () {
        that.bindFunc(bindParams)
    }


}

function Fruits() {
}

Fruits.prototype = {
    color: 'red',
    say: function (numb) {        console.log('number ' + numb)
    }
}
var apple = new Fruits()

var banana = {
    color: 'yellow'
}
let a=apple.say.bind(banana, [8])
a()
console.log(typeof apple.say.myBind(banana, 8))
