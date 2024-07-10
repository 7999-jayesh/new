 
 
 //  Asynchronous vs Synchronous JS

// console.log("1");
// setTimeout(()=>{
//     console.log("2");  // it print in last of the code
// },3000)   // After 3 sec. 
// console.log("3");
// console.log("hello");

// setTimeout  vs  setInterval

// setTimeout(()=>{
//     console.log("Hello");
// },3000)


// // Nesting -> it occurs in executing callback because more than one callback can occur at same time 

// Nested if-else ->
// let age = 19;
// if(age>=18){
//     if(age>= 60){
//         console.log("Senior");
//     }
//     else{
//         console.log("Middle");
//     }
// }
// else{
//     console.log("Child ");
// }

// Nested loops ->

// for(let i=0; i<5; i++){
//     let str="";
//     for(let j=0; j<5; j++){
//         str = str+j;
//     }
//     console.log(i, str);
// }


// Insta

// console.log("Template ofn story");
// setTimeout(()=>{
//     console.log("Data of story");
// },7000)
// console.log("Template of body");
// setTimeout(()=>{
//     console.log("Data of Body");
// },5000)
// console.log("Template of footer");


// setInterval works as an infinite loop

// setInterval(()=>{    
//     console.log("Jay Shree Ram");
// },3000)


// const food =document.getElementById("food");
// setInterval(()=>{
//     const demand =document.createElement("li");
//     demand.innerText="Bhhok lagi hai "
//     food.appendChild(demand);
// },2000)    // In every 2 second this message shown on screen infinite time

// console.log("Noodels");
// console.log("Extra cheese");


// // callbacks

// function sum (a,b){
//     console.log(a+b)
// }

// function calculator(a,b,fn,fn2){
//     fn2(a,b)
// }

// calculator(10,30,(a,b)=>{
//     console.log(a+b)
// },(c,d)=>{
//     console.log(c+d)
// });

// // callbacks with example


function getData(dataId,getNextData){

    setTimeout(()=>{
        console.log("data for " , dataId);
        if(getNextData){
            getNextData();
        }
    },3000)       
}
// // // callback hell -> it is a problem in javascript because it is difficult to understand and manage <- syntax x

console.log("getting data1.....")
getData(1,()=>{
    console.log("getting data2.....")
    getData(2,()=>{
        console.log("getting data3.....")
        getData(3,()=>{
            console.log("getting data4.....")
            getData(4)
        });    
    });
});  


// promises -> It is used for reducing callback problem.
// // promise is a object in javascript which has three states pending , fullfilled/resolve , rejected
// // Where resolve and rejected are to handlers inside it and these handlers automatically create with javaScript
// // by help of resolve we can generate final ouput in our function and by using reject we can create an error in our function.
// // In genral programming we can not create promises we only handle promises give us by another database


// const result=new Promise((resolve,reject)=>{
//     console.log("hello i am a promise");
//     reject("network issue");
//     // resolve("success");
//  });
//  console.log(result);

// function getData(dataId , getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Success");
//             // reject("error")
//             if(getNextData){
//                 getNextData();
//             }
//         },10000);
//     });
// }

// function asyncFunc1(){
//     return new Promise((resolve , reject )=>{
//         setTimeout(()=>{
//             console.log("data 1");
//             resolve("Success")
//         }, 4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve , reject )=>{
//         setTimeout(()=>{
//             console.log("data 2");
//             resolve("Success")
//         }, 4000);
//     });
// }

// console.log(("Fecting data 1...."));
// let p1 = asyncFunc1();
// p1.then((res) =>{
//     console.log(res);       // // In this we use two promises by using chaining technique by this our output come by one by one and not come at same time .
//       console.log(("Fecting data 2...."));
//       let p2 = asyncFunc2();
//       p2.then((res) =>{
//       console.log(res);
//    });
// });

// function getData(dataId){
// let result=getData(1);

// const serverReq= () => {
//     return new Promise((res,rej)=>{
//         console.log("i am a new request on server")
//         res("data sent")
//         rej("please check your connection")
//     })
// }

// let promise=serverReq();
// promise.then(()=>{
//     console.log("rendering data on front-end")
// })
// promise.catch(()=>{
//     console.log("data cant be abstracted")
// })
// }

// promise chaining  security and scalability => max  syntax X

// function getData(dataId){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//              rej("network issue")
//            // res("success")
//             console.log("data for " , dataId);
            
//         },3000);
//     }) ;
// }
// console.log("getting data 1....")
// getData(1).then((res)=>{
//     console.log("getting data 2....")
//     getData(2).then((res)=>{
//         console.log("getting data 3....")
//         getData(3).then((res)=>{
//             console.log("getting data 4....")
//             getData(4).then((res)=>{
//                 console.log(res)
//             });

//         });
//     });
// })
// .catch((rej)=>{
//     console.log(rej)
// })


// //callback hell syntax x
// console.log("getting data1.....")
// getData(1,()=>{
//     console.log("getting data2.....")
//     getData(2,()=>{
//         console.log("getting data3.....")
//         getData(3,()=>{
//             console.log("getting data4.....")
//             getData(4)
//         })
//     });
// }) 


// function getData(dataId){
//     return new Promise((resolve , reject) =>{
//         setTimeout(()=>{
//             console.log("data ",dataId);
//             resolve("Success");
//         }, 2000);
//     });
// }
// // async await -> it provide a easy syntax for doing any work step by step in a linear stage.
//                 //  in this second thing will execute only after first is run successfully.


// async function getAllData(){
//     console.log("Getting data 1......");
//     await getData(1);
//     console.log("Getting data 2......");
//     await getData(2);
//     console.log("Getting data 3......");
//     await getData(3);
//     console.log("Getting data 4......");
//     await getData(4);
//     console.log("Getting data 5......");
//     await getData(5);
//     console.log("Getting data 6......");
//     await getData(6);
//     console.log("Your data is arrived successfully .");
// }




// console.log("1")
 

// console.log("2")




// async function apiDelhi(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("requested on delhi server")
//             res("balle balle");
//             // rej("network issue")
//         },7000)
//     })
// }

// async function apiPune(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("weather data of Pune")
//             res("balle balle");
//         },7000)
//     })
// }

// async function GetWeatherData(){
//     const delhi=await apiDelhi();
//     console.log(delhi)
//     const pune=await apiPune();
//     console.log(pune)
// }

// console.log("hello");

// GetWeatherData();

