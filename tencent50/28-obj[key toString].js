const s = new Set([1, 2, 4, 3])
for (let value of s.values()) {
    console.log(value)
}
let i = s[Symbol.iterator]()
console.log(i.next())
const m = new Map()
m.set(1, 1)
m.set(2, 2)
m.set(4, 4)
m.delete(1)
m.set(3, 3)
for (let value of m.values()) {
    console.log(value)
}
