const user= {
    username: "tushar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);

        console.log(this);
    }
}

user.welcomeMessage()
// user.username= "priyaag"
// user.welcomeMessage()

// function tea(){
//     let username: "tushar"
//     console.log(this);
// }

// tea()

const tea = () => {
    let username = "hitesh"
    console.log(this.username);
}


// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "tushar"})


console.log(addTwo(3, 4))

