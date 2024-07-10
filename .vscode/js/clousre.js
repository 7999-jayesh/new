//  clousre

// let greetings = "Namaste!!!!";
// function someFunc(){
//     let username= "Jayesh";
//     // console.log(username);

//     function printName(){  
//         console.log(username);
//     }
//     printName(); // IN this inheritance concept is used because in printName there is not username but in it's parent "someFun" there username exists . 
// };
// someFunc();
// console.log(greetings); // it comes after function because it execute after function.


let greetings = "Namaste!!!!";
function someFunc(){
    let username= "Jayesh";
    // console.log(username);

    // function printName1(){
    //     console.log(username);
    // }

    // return printName1();

    function printName(){  
        console.log(username);
    }
   return  printName(); 
   console.log("Hello"); // It would not execute or print because after using return nothing can execute in that function .
};

let result = someFunc();
result();   // it will give us a error because result is not a function and we call it like a function .
console.log(greetings);