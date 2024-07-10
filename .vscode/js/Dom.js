// SELECTORS 

// const firstHeading = document.getElementById("heading-1")
// console.log(firstHeading);

// firstHeading.style.color="red"


// const allHeadings = document.getElementsByTagName('h1')
// console.log(allHeadings);

// // allHeadings.style.color="brown" // it does not work for everyone at same time  . it work by travesing one by one on each tag by using loops 

// for(let heading of allHeadings){
//     heading.style.color="brown"

// }

// const Alltext = document.getElementsByClassName('text')
// console.log(Alltext);

// for(let text of Alltext){
//     text.style.color="brown"
// }

// const element = document.querySelector('#heading-1')
// console.log(element);

// const element2 = document.querySelector('h1')
// console.log(element2);

// const element3 = document.querySelector('.text')
// console.log(element3);


// //  properties to change the structure of html


// const element=document.querySelector("p")
// console.log(element.innerText)  //text with styling

// console.log(element.textContent)  //text without styling

// console.log(element.innerHTML)   //it bring tags alongside text 


// const heading = document.querySelector("h1")

// heading.innerText="vande matram"



// let name1=prompt("enter yoru name")

// const element=document.querySelector("h1");

// element.innerText="hello " + name1;


// if(name1){
//     const greeting=document.querySelector("p")
    
//     greeting.innerText="hanji kya sewwa kari jaye apki"

// }


// const element=document.querySelector("a")

// console.log(element.getAttribute('href'));

// element.setAttribute('href','https://www.yahoo.com/?guccounter=1');

// const arr=[
//     'https://images.unsplash.com/photo-1647028343861-42175a2c34df?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://plus.unsplash.com/premium_photo-1667403193196-6c104fbcd231?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1703165805602-54276ce0cd6b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// ]

// const image=document.querySelector("img");

// let index=0;

// function loader(){
//     image.setAttribute('src',arr[index]);
//     index=(index+1) % arr.length
// }

// setInterval(loader,2000)




//  Adding elements to Dom :-

// const container=document.getElementById("section")
// const heading=document.createElement("h1")
// const heading2=document.createElement("h2")
// heading.innerText="jai shree ram"
// heading2.innerText="nalayko ko dimag do"

// // container.appendChild(heading)   // It only display one variable or element 

// container.append(heading,heading2);  // It display multiple element at a time



// const container =document.getElementById("section")
// const designation =document.getElementById("designation")

// let user ="User"
//  user =prompt("Enter your designation " , user)

// if(user==="teacher"){
//     designation.innerText="Hello "+ user;
//     const attendance= document.createElement("button")
//     attendance.innerText="Mark Student's Attendance "
//     container.appendChild(attendance)
// }

// else{
//     designation.innerText="Hello "+ user;
// }

// // Remove elemnets from the Dom :

// const Teacher = document.querySelector("h1")
// Teacher.remove(); // It remove elemnts form the source code or Structure

const container = documnet.querySelector("div")
const dish = document.querySelector("h1")

container.removeChild(dish) // Remove child from selected name 








