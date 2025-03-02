// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);
//result of line 2=  ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// Q1: Remove the first company from the array

// let removeFirstCompany = companies.splice(0,1)
// console.log(companies);
// result of line8= [ 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix' ]


// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// Q2: Remove Uber & add ola in its place

// companies.splice(2,1,"Ola");
// console.log(companies);
//result of line 16= [ 'Bloomberg', 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix' ]

// Q3: Add Amazon at the end

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.push("Amazon");
// console.log(companies);
//result= ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix", "Amazon"];

let arr = [];
arr[3]="Thor";
for(i=0; i<arr.length; i++){
    console.log(`arr idex${i} is ${arr[i]}`)
}
//result= 
// arr idex0 is undefined
// arr idex1 is undefined
// arr idex2 is undefined
// arr idex3 is Thor