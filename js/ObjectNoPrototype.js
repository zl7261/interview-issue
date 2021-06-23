var f = new Function()
var o = new Object()
f.prototype.test = function () {
    console.log('test');
}
o.__proto__.test = function () {
    console.log('test');
}
f.test = function () {
    console.log('f test ')
}
o.test = function () {
    console.log('o test ')
}
o.test()
f.test()