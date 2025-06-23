//Arrow Functions
// greet(); //hoisting
// function greet(){
//     console.log("Good Afternoon");
// }

//variable hoisting
// x=10
// console.log(x);
// var x
//let x//does not work


// const greet=()=>{console.log("Hello")};
// greet();

// greet(); //hoisting does not work for arrow functions
// const greet=()=>{console.log("Hello")};


// const add=(a,b)=>{(console.log(a+b))};
// add(5,6);

// const add=(a,b)=>{return a+b};
// const res=add(5,7);
// console.log(res)

const add=(...args)=>{
    console.log(args)
}
add(4,5,6,7)