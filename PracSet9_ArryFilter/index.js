// let arrNum = [1,2,93,4,5,93,788,11,90,91];

// let resultA = arrNum.filter((resl)=>{
//     return resl>90;
// });


let n=prompt("enter number");

let arr=[];

for(let i=1; i<=n; i++){
    arr[i-1]=i;
};
console.log(arr);


let sum=arr.reduce((result, curr)=>{

    // let total=result+curr;
    // return total;

    // or you can do this to 
    return result+curr;
})
console.log(sum);
let factorial = arr.reduce((result, curr)=>{
    return result*curr;
});
console.log(factorial);


// let result = arr.filter((val)=>{
//     return val<userInput;
// });
// console.log(result);