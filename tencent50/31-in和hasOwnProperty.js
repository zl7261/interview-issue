function Person() {
    // 实例私有的变量
    this.friends = []
}

// 实例公有的变量
Person.prototype.say = function () {
    console.log(this.friends)
}

var p1 = new Person()
var p2 = new Person()
p1.friends.push('ge', 'zhou')

p1.say() // [ 'ge', 'zhou' ]

p2.say() // []

