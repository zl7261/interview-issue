// a.mjs
import b from './b.mjs'
import {count, add, get} from './c.mjs'

console.log(b.count)    // 1
b.add()
console.log(b.count)    // 1
console.log(b.get())    // 2


console.log(count)    // 1
add()
console.log(count)    // 2
console.log(get())    // 2
