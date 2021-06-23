function Person(name) {
    this.name = name

    this.getName = function () {
        console.log(this.name)
    }
}

function myCall() {
    let calledObj = arguments[0]

    calledObj.fn = this

    let calledParam = Array.prototype.slice.call(arguments, 1)

    calledObj.fn(calledParam)
}

Function.prototype.myCall = myCall

new Person('alex').getName()

new Person('alex').getName.call(new Person('testMyCall'))
new Person('alex').getName.myCall(new Person('testMyCall'))