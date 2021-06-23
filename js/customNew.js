function myNew(...args) {
    let constructor = args[0]
    if (typeof constructor !== 'function') {
        throw new Error('constructor should be a function')
    }
    let newObj = Object.create(constructor.prototype)

    let ctorParams = args.slice(1)
    let result = constructor.apply(newObj, ctorParams)
    if (['object', 'function'].includes(typeof result)) {
        return result
    }
    return newObj
}

function Person(name) {
    this.name = name

    this.sayHi = function () {
        console.log('My name is great', this.name)
    }
}

let a = myNew(Person, 'Alex', 22)
let b = new Person('Alex', 22)
console.log(a.name)
console.log(b.name)
