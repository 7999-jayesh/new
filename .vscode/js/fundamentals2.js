// javascript is a loosely typed language -> i.e. strict action can't be done

// 'use strict '
// // -> strict
// let DrivingLicense = false
// let passTest = true

// if(passTest){
//     DrivingLicense=true;
// }

// if(DrivingLicense){
//     console.log("You can drive. !!");
// }
// else{
//     console.log("You can't drive. !! ");
// }


// JS -> Functions

// let greeting = "jai Shree Ram"
// function Logger(){
//    let message = "hello!!"   // block scope
//    return message
// }

//Global Scope
// const output =Logger()
// console.log(output);

// function fruitProcessor(apples,oranges){
//     console.log(`${apples} apple and ${oranges} orange`);

//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice  
// }

// const glass = fruitProcessor(2,3)// Arguments
// console.log(glass);

// console.log(fruitProcessor(4,5));

// const applejuice = fruitProcessor(5,0)
// console.log(applejuice);


// Function declaration vs function expression

// function calAge1 (birthyear){
// return 2024-birthyear
// }
// console.log(calAge1(2000))
// let Age1 = calAge1(2001)
// console.log(Age1);

// const calAge2 = function(birthyear){
//        return 2024-birthyear 
// }

// const age2 = calAge2(2001)
// console.log(age2);

// console.log(calAge2(2000));

// function fruitProcessor(apples,oranges){
//     console.log(`${apples} apple and ${oranges} orange`);

//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice  
// }

// const glass = fruitProcessor(2,3)// Arguments
// console.log(glass);
// function fruitProcessor(apples,oranges){
//     console.log(`${apples} apple and ${oranges} orange`);

//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice  
// }

// const glass = fruitProcessor(2,3)// Arguments
// console.log(glass);

// using expression 

// let fruitmachine = function (apples , oranges){
//   console.log(`${apples} apple and ${oranges} orange`);

//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice
// }

// const juice1 = fruitmachine(2,3)
// console.log(juice1);

// Arrow function vs function expression

// Function Expression 
// const calAge2 = function(birthyear){
//        return 2024-birthyear 
// }
// console.log(calAge2(2001));

// Arrow Function or  Callback Function  (=>) - in this we not need to create or use return and function variable
// const calAge3 = birthyear => 2024-birthyear
// console.log(calAge3(2000));

// const Retirement = (birthyear, name) => {
//   let age = 2024-birthyear;
//   let yearsToretire = 65-age;
//   return `${name} age is ${age} Years to retire ${yearsToretire}`
// }
// console.log(Retirement(2005 , "Jayesh"));

// Functio calling inside a function. (or) higher order function.

// const cutpieces=(fruit)=>{
//       return fruit*4
//   }

//   function fruitProcessor(apples,oranges){
//           let applePieces=cutpieces(apples)
//           let orangePieces=cutpieces(oranges)    
//           const juice = `Juice with ${applePieces} applePices and ${orangePieces} orangePices`

//           return juice;
//       }

//       const glass=fruitProcessor(2,3)
//       console.log(glass)

// Task 3

// const CalAvg=(R1,R2,R3)=>{
//   return (R1+R2+R3)/3
// }

// const AvgOfChennai=CalAvg(85,44,51);
// const AvgOfKolkata=CalAvg(23,24,21);

// console.log("Average of chennai is " + AvgOfChennai)
// console.log("Average of kolkata is " + AvgOfKolkata)


// const checkWinner=(TeamA,TeamB)=>{
//   if(TeamA>(TeamB*2)){
//       console.log("Team A which is chennai winns ")
//   }
//   else if(TeamB>(TeamA*2)){
//       console.log("Team B which is kolkata wins")
//   }
//   else{
//       console.log("no one wins")
//   }
// }

// checkWinner(AvgOfChennai,AvgOfKolkata) 


//  Arrays  -> first data structure

// const friends = ["jay" , "akash" , "himanshu"]
// console.log(friends);

// const salaries= [5000, 2500 , 2000]
// console.log(salaries);

// const birthyear = new Array(190 , 1999 , 2000 , 2005)
// console.log(birthyear);

// console.log(friends[2]); // Random access using index number


// Array -> inbuilt methods or function

// const friends = ["jay" , "akash" , "himanshu"]

// const chair = friends.length
// console.log(chair);
// //or
// console.log(friends.length);

// // index 

// console.log("Total index are : ", friends.length-1);

// array mutable hai means array ke andar ki value ya data change ho sakta hai

// friends[1] ="karan"
// console.log(friends);

// const is non-primitive but it allow us to change or manipulate  the data inside a function

// heterogenous

// const person = ["Mahi" , 7 , (2024-1982) , true , friends]
// console.log(person);
// console.log(person[4][2]); // accessing array inside an array 


// # Task :

// const birthyear = [1999 , 1985 , 1990]
// let age1 = 2024-birthyear[0]
// let age2 = 2024- birthyear[1]
// let age3 = 2024-birthyear[2]

// const currentage = [age1 , age2 , age3]
// console.log(currentage);

// OR second method by using function 

// const arr = [ 1990 , 1995, 2000]

// const calage = function(birthyear){
// return 2024 - birthyear
// }

// const age1 = calage(arr[0])
// const age2 = calage(arr[1])
// const age3 = calage(arr[2])

// const currentage =[age1 , age2 , age3]

// console.log("Ages are : ", currentage);

// // Adding new elements in our array using push operation
// const friends = ["Pankaj" , "Aman" , "Akash"]
// const dost = prompt("Enter your new friend name : ")
// console.log(dost);

// // const newlength = friends.push(dost)
// // console.log(friends);
// // console.log(newlength);

// // in this if we print length of an array then it shows 4 because it print the latest data 

// friends.unshift(dost) // this print new data in starting of an array
// console.log(friends);

//Removing an element from an array
// const friends = ["Pankaj" , "Aman" , "Akash"]
// const removedItem = friends.pop() // pop remove element from last of the list

// console.log(removedItem);
// console.log(friends);

// const removeFromStart = friends.shift() // It remove element from start
// console.log(removeFromStart);
// console.log(friends);

// const friends = ["Pankaj" , "Aman" , "Akash"]

// console.log(friends.indexOf('Aman')); // if value is not present in array then it show -1 as output

// console.log(friends.includes('Pankaj'));


// Task

// const bill =[125 , 555 , 44]

// const calTip = function(tip){

//     return tip >= 50 && tip <= 300 ? tip*0.15 : tip*0.20
// }
//  const Tip = [calTip(bill[0]) , calTip(bill[1]), calTip(bill[2])]

//  const TotalBill = [bill[0]+Tip[0] ,
//                     bill[1]+Tip[1],
//                     bill[2]+Tip[2] ]

// console.log(TotalBill);


// OBJECTS{}  successor of array , there is no index number it depends on key assign to each data it arrange data on the basic of alphabetes

// const PersonInfo={
//     firstName:"Monu",
//     lastName:"Patel",
//     age:30,
//     salary:10000,
//     JobStatus:true,
//     Profession:"SDE"
// }

// console.log(PersonInfo);

// console.log(PersonInfo.Name)

// dot vs bracket

// console.log(PersonInfo.Name)
// console.log(PersonInfo['salary']);

// const NameKey ="firstName";
// console.log(PersonInfo.key);// Here it not work because dot only give permission to direct access
// console.log(PersonInfo[NameKey]);// Here it is work because bracket allow us to access any key indirectly

// const key2="Name";
// console.log(PersonInfo['last'+key2]);

// const InputKey = prompt("Enter any key :")
// console.log(PersonInfo.InputKey); // Undefind
// console.log(PersonInfo[InputKey]);// Here information comes through expression 


// const PersonInfo={
//     firstName:"Monu",
//     // lastName:"Patel",
//     age:30,
//     salary:10000,
//     JobStatus:true,
//     Profession:"SDE"
// }

// const anyRandomThing= prompt("Ek random baat bol : ")

// if(PersonInfo[anyRandomThing]){
//     console.log(PersonInfo[anyRandomThing]);
// }

// else{
//     PersonInfo[anyRandomThing]=prompt("Enter the value of that random thing  : ")
// }

// console.log(PersonInfo);

// // Adding new information in our existing data

// PersonInfo.DOB ="01/12/2005"


// //  Loops :- for , while , do while
// // iterator :- It is used for executing some type of instruction inside loop

// Find even number between 1 to 20 

// // for loop
// for(let i = 1; i<=20; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// // while loop

// let user1 = 25
// let user2 ;
// let attempts=0;

// while(true){
//     user2 =Number(prompt("Enter your guessed value : "))

//     if(user2>user1){
//         console.log("Entered value is greater than original value.");
//     }
//     else if(user2<user1){
//         console.log("Entered value is less than original value.");
//     }
//     else{
//         console.log("Congo!!!!!");
//         break;
//     }
// }

// console.log("Total attempts :", attempts);

// // do while

// let kamai = 0;
// let customerStatus;

// do{
//     kamai = kamai+50;
//     customerStatus=prompt("Enter customer status yes/no :")
// }
// while(customerStatus=='yes' )
//     console.log("Aaj ke din ki kamai :", kamai);

// for of , for in , foreach

// // for of -> (Strings , arrays)  It only needs string or array name then it automatically start or end its execution . we not need to initialise , condition , increment or decrement it .

// let str = "JavaScript"
// let size = 0;

// for(let val of str){
//     console.log("val =", val);
//     size++;
// }
// console.log("Size of your string is :", size);

// // for in -> it is used for objects

// let student ={
//     name:'Chotu',
//     age:50,
//     cgpa:7.1,
//     isPass:true,
// }

// for(let key in student){
//     console.log(key +" : "+ student[key]);
// }


// // forEach -> used in json 
// let sampledata = [{ id: 123, name: "Pankaj" },
//                  { id: 321, name: "Vinu" },
//                  { id: 456, name: "Sonu" },
//                  { id: 654, name: "Monu" }
// ];

// sampledata.forEach((student)=>{
//     console.log(student.name , student.id);
//     // console.log(student.id);
// }
// )
































