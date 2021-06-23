function Parent() {
    this.name = 'asd'
}

function Son() {
    this.setName = function (n) {
        this.name = n
    }
}

function inheritPrototype(child, parent) {
    const prototype = Object.create(parent)
    prototype.constructor = child
    child.prototype = prototype
}

inheritPrototype(Son, Parent)

let son1 = new Son()
let son2 = new Son()
let parent = new Parent()
son1.setName('xyz')
console.log(son1.name, son2.name, parent.name)
console.log(Object.isExtensible(new Son()))

