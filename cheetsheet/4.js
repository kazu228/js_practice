let greeting = 'Hello, World!';
console.log(greeting);
let obj = { name : "Alice", age: 20};

console.log(obj.name);
console.log(obj.age);

let nullValue = null;
console.log(nullValue);

let undefinedValue;
console.log(undefinedValue);

function doNothing() { }
console.log('doNothing => ' + doNothing());

function doSomething() { return ''; }
console.log('doSomething => ' + doSomething() );

obj = { a: 10 };
console.log('objにないプロパティを呼び出した時' + obj.b);

let name = 'John';
console.log(`Hello ${name}`);




