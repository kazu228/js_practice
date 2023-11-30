let greeting = 'Hello World';
console.log(greeting);

let msg = 'Hello Node.js';
console.log(msg);

let a = 10;
let b = 20;
let c = a + b;
console.log(c);

c = a * b;
console.log(c);

c = a / b;
console.log(c);

c = b % a;
console.log(c);

let object = {
    name : 'kazu',
    age : 25
};

console.log(object.name);
console.log(object.age);

console.log(`I am ${ object.name }.`);
console.log(`I am ${object.age} years old.`);


let person = {
    name : 'kazu228',
    age : 25,
    say : function () {
        console.log(`I am ${ this.name }. I am ${ this.age } years old.`);
    }
}
person.say();

let sankaku = {
    teihen : 10,
    takasa : 5,
    menseki : function () {
        return this.teihen * this.takasa * 0.5;
    }
}

console.log(sankaku.menseki());

let num = 7;
if (num % 2 == 0) {
    console.log('偶数');
} else {
    console.log('奇数');
}