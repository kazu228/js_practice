let greeting = 'Hello World';

console.log(greeting);

const tax = 1.10;

console.log(tax);

// tax = 1.15;

// console.log(tax);

let obj = { a: 'a'};

console.log(obj.a);

const obj2 = { abc : 'ABC'};

console.log(obj2.abc);
// obj2 = { def : 'DEF'};   // NG


obj2.abc = 'abc';
console.log(obj2.abc);    // OK

// undefined
console.log(obj.b);

let undefinedValue;

// undefined
console.log(undefinedValue);

function funcNothing() {}

// undefined
console.log(funcNothing());

let nullValue = null;

console.log(nullValue);

let name = 'John';

console.log(`Hello ${name}`);

let [ first, second, third ] = [ 'first', 'second', 'third'];


console.log(first);
console.log(second);
console.log(third);

let x = 10;
let y = 20;
let a = 30;

let z = { x, y, a };

console.log(z);
console.log(a);






