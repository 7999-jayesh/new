 //  Events -> Events not work without functions .  


// let salary = 0;
// salary = Number(prompt("Enter Your Salary : "));

// if(salary!=0){
//      const screen =document.getElementById("screen")
//      const showSalary =document.createElement("h3")
//      showSalary.innerText=`Your entered salary is ${salary}`;
//      screen.appendChild(showSalary);
//      const Bonusbtn= document.getElementById("btn")
//      Bonusbtn.style.display="block";

//      Bonusbtn.onclick=()=>{
//         salary=salary+500;
//         showSalary.innerText=`Your entered salary is ${salary}`
//      }
// }

// const securityBox =document.querySelector(".screen")

// securityBox.onmouseover =()=>{
//    const key = prompt("Enter the security key to access password.")

//    if(key=='abcd'){
//       alert("You can access the password.")
//       document.querySelector(".password").style.display="block"
//    }

//    else{
//       alert("Abbe chal naa!!!")
//    }
// }


// const button =document.querySelector("#btn")

// button.onclick = (e)=>{     // // If we give Parameter inside braces and print it then it show the all properties used in that event and that function
//    console.log("Button Clicked");
//    console.log(e);
// }


//  const button2 =document.querySelector("#btn2")

// button2.ondblclick =(e) =>{
//    alert("Clicked!!!!")
//    console.log(e);
// }


// const submitBtn =document.querySelector("#submit")

// submitBtn.onclick =()=>{
//    const myName =document.querySelector("#name")
//    const myAge =document.querySelector("#age")

//    const name =document.createElement("h3")
//    const age =document.createElement("h3")

//    name.innerText=`Your name is ${e.target.value}`
//    age.innerText=`Your age is ${e.target.value}`

//    screen.append(name,age)
// }


// //   Onchange :-

// const screen =document.getElementById("screen")
// const Input= document.getElementById("name")

// // //  Input.value == e.target.value

// Input.onchange =(e)=>{
//    console.log(Input.value);
//    console.log(e.target.value);

//    const data=document.getElementById("inputData")
//    data.innerText=e.target.value
   
// }


// const button =document.getElementById("btn")

// // IF we use same function twice then the second one override the first . i.e. second execute first stop.
// button.onclick =()=>{
//    console.log("Hello Mitrooo!!!");
// }

// button.onclick =() =>{
//    alert("Welcome!!!!");
// }

// const button = document.getElementById("btn");

// // By using event listners we can execute same function multiple time .
// // By single click we can execute multiple function

// button.addEventListener("click",()=>{
//    console.log("Namaste Mitroo 1 !!!!");
// })

// function handleClick (){
//    console.log("Namaste Mitroo 2!!!");
// }
// button.addEventListener("click",handleClick)

// button.addEventListener("click",()=>{
//    console.log("Namaste Mitroo 3 !!!!");
// })

// button.addEventListener("click",()=>{
//    console.log("Namaste Mitroo 4 !!!!");
// })

// // It remove one function from same function 
// button.removeEventListener("click", handleClick)


// const modebtn =document.getElementById("Modebtn")

// const body =document.querySelector("body");

// let currentMode ="light"

// modebtn.addEventListener("click",()=>{
//    if(currentMode==='light'){
//       currentMode="dark"
//       console.log(currentMode);
//       // body.style.backgroundColor="black" // // this work without css class
//       body.classList.add("dark")
//       body.classList.remove("light")
//    }

//    else{
//       currentMode="light"
//       console.log(currentMode);
//       // body.style.backgroundColor="white" // // this work without css class
//       body.classList.add("light")
//       body.classList.remove("dark")
//    }
// })


//  const formEl =document.querySelector("form");
//  console.log(formEl);

// //  formEl.addEventListener("submit",(event)=>{
// //    event.preventDefault();    // it help browser to work normally or it stop browser from auto reloading 
// //    console.log(event);
// //    console.log("Form Submitted");
// //  })

// formEl.addEventListener("submit",(event)=>{
//    event.preventDefault();
//   console.log( formEl.elements[0].value);
//   console.log( formEl.elements[1].value);
//   console.log( formEl.elements[2].value);
// })







