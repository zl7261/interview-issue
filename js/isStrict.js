
let isStrict = (function () {
    return this === undefined
}())
console.log(isStrict);

