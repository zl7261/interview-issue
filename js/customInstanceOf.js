function Father() {
    this.son = []
}


function Son() {
    // 借用Father的构造函数 为每个Son实例初始化单独的Father实例
    Father.call(this)
}

Son.prototype = new Father()

var s1 = new Son()
var s2 = new Son()
s1.son.push('s1')
console.log(s2.son)

// 寄生式继承
function object(o) {
    function F() {
    }

    F.prototype = o
    return new F()
}

var person = {
    name: 'nico',
    friends: ['alex', 'tom']
}

var p1 = object(person)
p1.name = 'Greg'
p1.friends = p1.friends.slice(1)

var p2 = object(person)
p2.name = 'Bill'
p2.friends.push('Greg')
console.log(person.friends)


