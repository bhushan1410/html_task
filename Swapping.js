//a=10,b=20 output a=20,b=10
let a = 10;
b = 20;
a = a + b;
console.log(a);
b = a - b;
console.log("b =" + b);
a = a - b;
console.log("a =" + a);
