// console.log("Welcome to JS")
// console.log(100);
// console.log("true")
// console.log("Jayesh");

// let firstName="Jayesh";
// let salary =250;

// data type - mukt.


//rules
//1- camel casing
//2- spacing not allowed
//3- last_name
//4- starting word number or special character
//5- keyword
//6- Variable -> uppercase -> PI ->3.14

// SALARY if any variable name is in capital letter than is not not changeable

//7- Logical

// Data types ->
//Primitive                                        non-primitive
//1- Number                                         1- Arrays
//2- Strings                                        2- objects
//3- boolean
//4- undefined
//5- null

// let age = 22;
// console.log(age);


// let full_Name="Chota Bheem"
// console.log(full_Name);

// let job=true;
// console.log(job);


// let marks;
// console.log(marks);

// let bankBalance=null;
// console.log(bankBalance);

// let num=800;
// console.log(num);

//operator-> typeof ;

// console.log(typeof(12));

// console.log(typeof("jayesh"));

// console.log(typeof('A'));

// console.log(typeof(undefined));

// console.log(typeof(null));

// null is not an object so it is a bug in JS

// console.log(typeof(true));

// by using let , const , var variables we can declare blocks information
// var is the least used variable

//let

// let age=18
// console.log(age);

// age=22
// console.log(age);

//const

// const birthyear=2005
// console.log(birthyear);

//var

// var personality="introvert"
// console.log(personality);

// var personality="extrovert"
// console.log(personality);

// Operators :
// Mathematical":- + , - ,* , / , %

// const currentyear = 2024

// let age=currentyear-2005

// let age1 = currentyear-1995

// console.log(age);

// console.log(age1);

// console.log(age*2 , age/2);

// console.log(5**3);

// Operator -> overloaded

// const firstname="Champa"
// const lastname="Chameli"

// console.log(firstname+" "+lastname);
//here + operator concartinate the objects


// argumental operator :-> += , -= , %= >= , <= 

// let currentyear = 2024
// let year =2025
// let year2 = 2020
// console.log(currentyear+=10 > (currentyear-=year2));

// console.log(currentyear+=2 >( year%=2));
 // Challenge 1
// let massM = 78
// let heightM = 1.69

// let massJ=92
// let heightJ= 1.95
 
// const BMI1 = massM/heightM**2
// console.log("BMI of Mark is : "+BMI1);

// const BMI2 = massJ/heightJ**2
// console.log("BMI of Jhon is : "+BMI2);

// markHigherBMI = BMI1> BMI2
// console.log(markHigherBMI + " Yes! Mark BMI is higher than Jhon BMI");

// Strings and string templates :

// const name1 ="Pankaj"
// const job ="Manager"

// const birthyear = 2000
// const currentyear = 2024

// const age = (currentyear-birthyear)

// const information="I am " + name1 + " My job title is "+job + " and my age is "+ age

// console.log(information);


// String templates:

// ``  -> Backticks : template literals - they always carry expression inside it they did not accept any statement inside it.

// const info=`I am ${name1} 
// My job is ${job} 
// My age is ${age}`
// console.log(info);

// if(BMI1 > BMI2){
//     console.log("Marks BMI is higher than Jhons BMI");
//     console.log("Mark's BMI is "+ BMI1 +" and jhons BMI is "+ BMI2);
// }

// let age =prompt("Enter your age : ")
// if(age>18){
//     console.log(" You are eligible for driving .");
// }
// else{
//     const yearsleft=`Wait for next ${ 18-age } years`
//     console.log(yearsleft);
// } 

// let age = prompt("Enter your age : ")
// let eyesight = prompt("Are you blind : ")
// let n = "no"
// let y = "yes"
// if(age>18 && eyesight==n){
//         console.log("You are eligible for drive.");
//     }

// if(age>18){
//     if(eyesight==y){
//         console.log("You are not eligible for driving because you are blind .");
//     }
// }
// else{
//     const yearsleft =`Wait for next ${18-age} years and then come for eye test .`
//     console.log(yearsleft); 
// }


// Type conversion  :- in this always a copy of that variable is converted into another datatype its original copy always remains same datatype

// let salary=prompt("Enter your salary : ")
// let bonous = 1000

// let updatedsalary = Number(salary)

// console.log(salary+bonous); // This will concartinate the salary and bonous because salary is not converted into number .

// console.log(updatedsalary+bonous); // this will add salary and bonous because salary is converted into number.

// let salary = Number(prompt("enter your salary :"))
// let bonous = 1000

// console.log(salary+bonous);

// type coersion:- In this system automatically understand what is scnerio and act according to it .
// It depends on the data inserted
// console.log('I am '+ 23 +' years old . ');
// If only there is a plus sign than it concatinate otherwise it convert it into number 
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' + '10' - 3);

// let n = '1' +1 // here it concartinate so it become 11
// n = n-1  // here it substract 11-1 
// console.log(n); // answer 10

// True or Falsyy valuess

// Falsyy -> 0 , "" , undefined , null , Nan 

// let email 
// if there is any blank infomation then it is always false
// console.log(email);

// if(email){
//     console.log(email);
// }
// else{
//     console.log("Andhe email daal .");
// }

// All other values except these five are always true
// console.log(Boolean(0));
// console.log(Boolean(  ));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// console.log(Boolean(156));
// console.log(Boolean("Jayesh"));

// let height = Number(prompt("Enter your height : "))

// console.log(height);

// if(height){
//     console.log(`Your entered height is ${height} in cm`);
// }

// else{
//     console.log("Abbe chikni height enter kar");
// }

// == vs ===
// == -> it loosely chek the datatype
// === -> it strictly ckecj the datatype of the value

// let age=prompt("Enter your age : ")
//  if(age===18){
//     console.log("Bhai jawani chad gayi");
//  }

//  else{
//     console.log("heehe");
//  }


// Boolean Opereator AND->&& , OR->|| , NOT->!

// const hasDrivingLicence = false;
// const goodVision = true;
// const isTired = true;

// console.log(hasDrivingLicence&&goodVision);
// console.log(hasDrivingLicence||goodVision);
// console.log(!hasDrivingLicence);

// if(hasDrivingLicence&&goodVision || isTired){
//    console.log("Jaa Bhai gaadi chala le");
// }
// if(hasDrivingLicence||goodVision){
//    console.log("Jaa Bhai gaadi chala le");
// }
// if(!hasDrivingLicence){
//    console.log("Jaa Bhai gaadi chala le");
// }

// else{
//    console.log("Rhende ghar baith");
// }


// Task 2 ::

// let dolphins1=96
// let dolphins2=108
// let dolphins3=89

// let kolas1 = 88
// let koalas2= 91;
// let koalas3 = 110;

// const avgd=(dolphins1+dolphins2+dolphins3)/3
// const avgk =(kolas1+koalas2+koalas3)/3

// if(avgd>avgk&&avgd>100){
//    console.log(avgd);
//    console.log("Dolphins Team wins with average of : "+avgd);
// }
// else if(avgd<avgk&& avgk>100){
//    console.log("Kolas team wins with average of : "+avgk);
// }

// else if (avgd==avgk &&avgd>100 && avgk>100) {
//    console.log(`Average of Dolphins team is : +avgd
//    average os Kolas team is : +avgk`);
// } 
// else {
//    console.log("No one wins ");
// }


// Switch case :

// let day = prompt("Enter a day :")

// switch(day){

//    case 'Monday':
//       console.log("Chest Day !!!");
//       break;

//    case 'Tuesday':
//       console.log("Back Day !!!");
//       break;
   
//    case 'Wednesday':
//    case 'Thursday':
//       console.log("Bhai mera rest chal raha hai .");
//       break;
      
//    case ' Friday':
//       console.log("Leg Day !!!");
//       break;   
//    case 'Saturday':
//       console.log("Cardio !!!");
//       break;

//    case'Sunday':
//       console.log("Bhai aaj to GYM band hai .");
//       break;
    
//    default :
//       console.log("Abbe andhe sahi day daal!!!")     

// }


// Statement & Expression
// Statement :- It is a collection of logics or instruction ex. if else  ,  functions , class


// ternary operator -> it is a type of expression
// const age = 23;
// const sakal = true;

// (age>18 && sakal)?console.log("kuch bhi") : console.log("kuch nahi");










