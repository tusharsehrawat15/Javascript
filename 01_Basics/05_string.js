const name = "tushar"
const repoCount = 50 

//console.log(name + repoCount + " Value");

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('tushar-hc')

const newString = gameName.substring(0 , 4 )
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   tushar   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sehrawat.com/tushar%20sehrawat"

console.log(url.replace('%20', '-'))

console.log(url.includes('tushar'))