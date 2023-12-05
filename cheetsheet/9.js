let greeting = 'Hello World';
console.log(greeting);

let object = {
    name : 'kazu',
    age: 25,
    address : 'Aichi'
};

const s = `name => ${ object.name } , age => ${ object.age } , address => ${ object.address }`;

console.log(s);

const obj = { a : 'a'};

// obj = { b : 'b' };  // NG

obj.c = 'c';

console.log(obj.c);

console.log(obj.d);

let undefinedValue;

console.log(undefinedValue);

function doNothing() {}

console.log(doNothing());



