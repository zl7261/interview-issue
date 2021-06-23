function Parent(name) {
    console.log('parent called')
    this.name = name
    this.colors = ['yellow', 'white']

}

Parent.prototype.sayName = function () {
    console.log(this.name)
}

function Son(name, age) {
    Parent.call(this, name)
    this.age = age
}

Son.prototype = new Parent()
Son.prototype.constructor = Son
Son.prototype.sayAge = function () {
    console.log(this.age)
}
let son1 = new Son('alex', 20)
let son2 = new Son('bill', 18)
son1.colors.push('black')
console.log(son1.colors.length, son2.colors.length) // 3 2
son1.sayName() // alex
son1.sayAge() // 20