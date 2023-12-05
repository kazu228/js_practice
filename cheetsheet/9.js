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

let [ first, second, third ] = [ 1, 2, 3];

console.log(first);
console.log(third);

let a = 100;
let b = 200;

let ex = { a, b };

console.log(ex);

for (let i = 0; i < 5; i++ ) {
    console.log('Hello JS');
};





