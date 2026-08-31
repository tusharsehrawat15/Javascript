//var c = 300
a = 3000
if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);


// Nested Scope

function one(){
    const username = "tushar"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

one()

if(true){
    const username = "tushar "
    if(username === "tushar"){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);