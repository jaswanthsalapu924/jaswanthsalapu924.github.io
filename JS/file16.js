//promises
// function f1(x){
//     // return 5
//     // setTimeout(()=>{return 5;},1000)
//     return new Promise((resolve,reject)=>{
//         //resolve(5);
//         if(x<0)
//         reject("Something Went Wrong");
//     else
//     resolve(5)
//     });
// }

// function f2(x){
//     console.log(x+7)
// }

// let x=1
// f1(x)
// .then((n)=>f2(n))
// .catch((err)=> console.log(err));
// const n=f1()
// const result=f2(n);
// console.log(result)



// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((data)=>{
//     data.map(value=>{
//         console.log(value.name, value.email)
//     })
// })
// .catch((err)=>console.log(err));

const fetchData= async () =>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json
    data.map(value=>{
        console.log(value.name, value.email)
    })
}