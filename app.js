function debounce(func, delay){
    let timeoutId;

    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
        func.call(this, ...args);
        }, delay)
        
    }
}
const myInput =  document.querySelector("#inputEvent");
function findSuggestions(e){
    console.log(e.target.value);
}

const decoratedFindSuggestions = debounce(findSuggestions, 300);
myInput.addEventListener("input", decoratedFindSuggestions);

//input
//keyup
//change
//keypress => buggy
//keydown

// myInput.addEventListener("keyup", ()=>{
//     console.log(myInput.value);
// })

// myInput.addEventListener("input", (e)=>{ //recommended
//     // console.log(myInput.value);
//     // console.log(e);
//     console.log(e.target.value);
//     // console.log(this); // window because of arrow function, if you want to use this, use normal fxn.
// })

// myInput.addEventListener("change", ()=>{
//     console.log(myInput.value);
// })


