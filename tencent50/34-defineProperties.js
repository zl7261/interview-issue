let obj = {
    tree: {
        value: 1,
        left: {
            value: 2
        }
    }
}
let {name, tree: {value, left: {value: leftValue}}} = obj
console.log(value, leftValue)