//DECORATOR FUNCTION
//it takes function and returns function
function decorator(func){
    return function(...args){
        console.log("You are calling decorated", func.name);
        func.call(this, ...args);
    }
}

function hello(name){
    console.log("hello", name);
}

const decoratedHello = decorator(hello);
decoratedHello("sujan");