// Primitive

// 7 types: String, Number, Boolean , null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);

// const bigNumber = 234343482959278237427n



// Reference (Non Primitive)

//Array, Objects, Functions

const heros = ["Hulk", "Batman", "Superman"];
let myObj = {
    name: "Tushar",
    age : 20,
}

const myFunction = function(){
    console.log("hello World");
}

console.log(typeof anotherId);