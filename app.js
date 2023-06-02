const myInput =  document.querySelector("#inputEvent");

//input
//keyup
//change
//keypress => buggy
//keydown

// myInput.addEventListener("keyup", ()=>{
//     console.log(myInput.value);
// })

myInput.addEventListener("input", (e)=>{ //recommended
    // console.log(myInput.value);
    // console.log(e);
    console.log(e.target.value);
    // console.log(this); // window because of arrow function, if you want to use this, use normal fxn.
})

// myInput.addEventListener("change", ()=>{
//     console.log(myInput.value);
// })