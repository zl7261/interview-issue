Object.prototype.o = 1;
function A(){}
var a =new A()
console.log(a.o);
console.log(A.o)
console.log(a.__proto__.__proto__.o);
console.log(Object.prototype.o);