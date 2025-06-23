//Arrays

// const score=[2,1,6,7,3]
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)

// const newScore=[...score,9]
// console.log(newScore)

// const cart={
//     1: 5,
//     5: 3,
// };
// const newCart=({...cart,4:1})
// console.log(newCart)

// let cart={};
// const products=[
//     {id: 1, names: "product 1", price: 25},
//     {id: 2, names: "product 2", price: 35},
// ];
// const newProducts=[...products,{id:3, name: "Product 3", price: 45}]
// function addToCart(id){
//     cart={ ...cart,[id]:1};
// }
// addToCart(1)
// addToCart(3)
// console.log(cart)

// function incitem(id){
//     cart[id]=cart[id]+1
// }
// incitem(1)
// console.log(cart)

//Array Methods
const score=[2,1,7,5,3];
// score.forEach((value)=>{
//     console.log(value);
// });

// score.map((value)=>{
//     console.log(value);
// });


// const newScore=score.map((value)=>{
//     return value+5
// });
// console.log(newScore)


// const newScore=score.filter((value)=>{
//     return value > 2;
// });
// console.log(newScore)

// const newScore=score.find((value)=>{
//     return value === 2;
// });
// console.log(newScore)

// const newScore=score.reduce((sum,value)=>{
//     return sum+value;
// },0);
const newScore=score.reduce((sum,value)=> sum+value,0);
console.log(newScore)