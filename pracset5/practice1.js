let marks = [85,97,44,37,76,60];
console.log(marks);//[ 85, 97, 44, 37, 76, 60 ]


let sum = 0;

for(let val of marks) {
    sum = sum+val;
}

let total = sum / marks.length;
console.log(total)//66.5
