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


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "tushar", 
    price: 200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)

handleObject({
    username: "rahul",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 300, 500, 1000]))