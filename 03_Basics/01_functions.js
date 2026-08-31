function sayMyName(){
console.log("T")
console.log("U")
console.log("S")
console.log("H")
console.log("A")
console.log("R")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result= addTwoNumbers(3, 5)

// console.log("Result: ", result)

function loginUserMessage(username){
    if(username === undefined ){
        console.log("Please enter username");
        return
    }
    else{
    return `${username} just logged in.`
    }
}

// console.log(loginUserMessage("Tushar"))
console.log(loginUserMessage())