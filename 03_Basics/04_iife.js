//Immediately Invoked Function Expression (IIFE)

// Named IIFE 
(function one(){
    console.log(`DB CONNECTED`);
})();


// Unnamed IIFE


// ( () =>{
//     console.log(`DB CONNECTED TWO`);
// } )()
( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
} )(`tushar`)