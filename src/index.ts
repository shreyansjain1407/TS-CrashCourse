let id: number = 5;
let company: string = "AWS"
let isPublished: boolean = true
let x: any = "AnyString"
x = true // This can be done since x is an any type variable
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, 'String', true] // Any arrays can have any variable type

// Tuple
let person: [number, string, boolean] = [1, "Shreyans", true]
// Tuple array
let employee: [number, string][]
employee = [
    [1, "Shreyans"],
    [2, "Kshitij"],
    [3, "Rohit"],
    [4, "Gaurav"]
]

// Unions, These are variables that can be set to any of the  defined ones
let pId: string | number = 22 

// Enums
enum Direction1 {
    Up,
    Down,
    Right, 
    Left
}

enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Right = "RIGHT", 
    Left = "LEFT"
}


// Interface
interface userInterface {
    readonly id: number, // with the readonly tag, this cannot be modified later
    name: string
    age?: number // The '?' makes this variable optional
}
// Objects
type User = {
    id: number,
    name: string
}
const user: userInterface = {
    id: 1,
    name: 'Shreyans'
}

type Point = number | string // We can't user interface with Primitives / Unions
const p1: Point = 1

// Type Assertion
let cid: any = 1
// let customerId = <number>cid // OR the one below
let customerId = cid as number
// customerId = true //This will throw an error.

function addNum(x: number, y: number): number { 
    //The last number above specifies the return type value
    return x + y
}
// Function with void return type
function log(message: string | number): void {
    console.log(message)
}

// Using an interface with a function
interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

const Shreyans = new Person(1, "Shreyans")