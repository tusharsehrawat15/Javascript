//singleton

//object literals 

const JsUser = {
    name: "Tushar",
    "full name": "Tushar Sehrawat",
    age: 20,
    location: "Pune",
    email: "tusharsehrawat15@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email= "tushar@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email= "tushar@microsoft.com"
console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo= function(){
    console.log('Hello JS User, ${this.name}');
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());