let greeting = 'Hello World.';

console.log(greeting);

const msg = 'I am c constant';

console.log(msg);

const myObject = { key : "value" };

console.log(myObject.key);

myObject.key = 'new value';

console.log(myObject.key);

let obj = {
    name : 'Alice',
    age : 20,
};

console.log(obj.name);

console.log(obj.age);

let nullValue = null;

console.log(nullValue);

let undefinedValue;

console.log(undefinedValue);

const object = { a : 'A' };

console.log(object.a);
console.log(object.b);

function doNothing() {

}

console.log(doNothing());

let name = 'John';

console.log(`Hello ${ name }`);


let [ first, second , third ] = [ 'first', 'second', 'third' ];

console.log(first);
console.log(second);
console.log(third);

let x = 10;
let y = 20;

let obj_li = { x, y};

console.log(obj_li);

let person = {
    name : "Alice",
    greeting : function () {
        console.log(`Hello My name is ${ this.name }`);
    },
};

person.greeting();

let num = 10;

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log('Negative number');
} else {
    console.log("Zero");
}



























