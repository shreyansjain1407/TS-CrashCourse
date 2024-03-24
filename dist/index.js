"use strict";
let id = 5;
let company = "AWS";
let isPublished = true;
let x = "AnyString";
x = true; // This can be done since x is an any type variable
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'String', true]; // Any arrays can have any variable type
// Tuple
let person = [1, "Shreyans", true];
// Tuple array
let employee;
employee = [
    [1, "Shreyans"],
    [2, "Kshitij"],
    [3, "Rohit"],
    [4, "Gaurav"]
];
// Unions, These are variables that can be set to any of the  defined ones
let pId = 22;
// Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Right"] = 2] = "Right";
    Direction1[Direction1["Left"] = 3] = "Left";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Right"] = "RIGHT";
    Direction2["Left"] = "LEFT";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Shreyans'
};
const p1 = 1;
// Type Assertion
let cid = 1;
// let customerId = <number>cid // OR the one below
let customerId = cid;
// customerId = true //This will throw an error.
function addNum(x, y) {
    //The last number above specifies the return type value
    return x + y;
}
// Function with void return type
function log(message) {
    console.log(message);
}
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Shreyans = new Person(1, "Shreyans");
// console.log(Shreyans.register())
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(3, "Jake", "Developer");
// console.log(`Emp Name: ${emp1.name}`)
// console.log(emp1.register())
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 3, 5, 7, 9]);
let strArray = getArray(['sj', 'raj', 'akshay']);
// numArray.push('hello') // This is only possible if getArray takes in any and returns any
