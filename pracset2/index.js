// Question 1

let number = prompt("Enter number");
console.log(number);

if (number%5===0) {
    console.log("Number is multiple of 5");
}
else {
    console.log("Number is not multiple of 5");
}



// Question 2

let marks = prompt("Enter marks");
console.log(marks);

if (marks >= 90 && marks<=100){
    console.log("Your Grade is A");
}
else if (marks >= 70 && marks<=89){
    console.log("Your Grade is B");
}
else if (marks >= 60 && marks<=69){
    console.log("Your Grade is C");
}
else if (marks >= 50 && marks<=59){  
    console.log("Your Grade is D");
}
else if (marks <=49  && marks>=0){
    console.log("Your are Fail");
};

