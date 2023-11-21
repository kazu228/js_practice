let greeting = "Hello, World!";

console.log(greeting);

let myVar;
console.log(myVar);

const myObj = {a: 1};
console.log(myObj.b);


function doNothing() {}
console.log(doNothing());

let name = 'John';
console.log(`Hello, ${name}!`);

let [ first, second] = ["first", "second"];
console.log(first);
console.log(second);

let x = 10,
    y = 20;

let obj = { x, y};

console.log(obj);

let person = {
    name: "Alice",
    greet: function () {
        console.log(`My name is ${this.name}`);
    }
}

person.greet();
