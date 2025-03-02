// Easy 
// // Question 1
//This normal function
function sum1(a,b){
    console.log(a+b);
}
sum1(4,5);

//This is arrow function 
let sum=( (a,b)=>{
    console.log(a+b);
    
});
sum(4,5);

//this is arrow function without saving
( (a,b)=>{
    console.log(a+b);
    
})(4,5);

// let multiply = (a,b)=>{
//     console.log(a*b);
// }
// multiply(4, 5);

//  function divide(a,b){
//      console.log(a/b);
    
//  };
//  divide(10, 2);

// let divide=(a,b)=>console.log(a/b);
// divide(20, 2)

// // Question 2
// // Convert the following regular function into an arrow function:


// function multiply(a, b) {
//     return a * b;
//   }
// console.log(multiply(4,5));
 

// let multi=(a,b)=>a*b;
// console.log(multi(10,5));


// // Quesion 3
// // Create an arrow function that returns the square of a number.

// let square=(a)=>{
//     return a**2;
// }

// // Question 4
// // Write an arrow function that takes a name as input and returns a greeting message like Hello, [name]!.

// const message=(name)=>{
//     console.log(`Hello, ${name}!`);
    
// }

// // Intermediate Questions:
// // Question 5


// // Question 6

// let arr=[1,2,3,4,5,6,7,8];
// let cal=arr.filter=(even)=>{
//     return arr/2==0;
// }


// let arrys=[10,15,20,25,30];
// // let result=0;
// let result= arrys.forEach((val)=>{
//     return val/2==0;
// })

// let divideByTwo=  (arr1) =>{
//     arr1.filter(arr1/2==0)
//     console.log("aro");
    
// }

// function takeString(strs){
//     let count=0;
//     for (let str of strs) {
        
//         // console.log(count);
//         if(str==="a" || str==="e" || str==="o" || str==="u"){
//             count++;
//             // console.log(count);
//             console.log(str);
//         }
//     }
//     console.log(count);
// }
// takeString("apnacollege");
    

// let countVowels= (abc)=>{
//     count=0;
//     for (const str of abc) {
//         // console.log(str);
//         if(str==="a" || str==="e" || str==="o" || str==="u"){
//             count++;
//             console.log(str);
            
//         }     
//     }
//     console.log(count);
    
// }

// countVowels("apnacollege");











// //String practicd
// // let str="  Adnan   ";
// // let str2="Barud"
// // let a=str.toUpperCase;
// // console.log(str.toLowerCase()); // adnan   
// // console.log(str.toUpperCase());//  ADNAN 
// // console.log(str.trim());//Adnan
// // console.log(str.slice(2, 4));//Ad
// // console.log(str.concat(str2));//  Adnan   Barud
// // console.log(str.charAt(3));//d ye specing bhi pakdta he
// // console.log(str.replace("n","A"));


