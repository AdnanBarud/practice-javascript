let button = document.querySelector("button");

// button.onclick = ()=> {
//     console.log("hello");
//     let a = 25;
//     ++a;
//     console.log(a)
    
// };

button.addEventListener("click", (evt) =>{
    console.log("Adnan");
});

let div1 = document.querySelector(".div1");
// div1.onmouseover = (evt)=> {
//     console.log("Adnan");
//     console.log(evt.target);
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX, evt.clientY);
// };



div1.addEventListener("mouseover", () => {
        console.log("Adnan");
});
div1.addEventListener("mouseover", () => {
        console.log("Adnan2");
});
let Adnan3=    () => {
    console.log("Adnan3");
};
div1.addEventListener("mouseover", Adnan3);

let Adnan4= ()=>{
    console.log("Adnan4");
};
div1.addEventListener("mouseover", Adnan4);
div1.removeEventListener("mouseover", Adnan4)


div1.removeEventListener("mouseover", Adnan3);
