//Objects
const student={
    name:"Harsh",
    age:21,
};
// console.log(student)
// console.log(student.name)
// console.log(student["name"])

// student.city="Amritsar"
// console.log(student)
// student.city="Hyderabad"
// console.log(student)

// delete student.age
// console.log(student)

// const keys=Object.keys(student)
// console.log(keys)

// const vals=Object.values(student)
// console.log(vals)

const cart={
    1: 5,
    3: 1,
    5: 2,
};
const items=Object.keys(cart).length
console.log(items)
cart[3]=cart[3]+1
console.log(cart)
cart[3]=cart[3]-1
console.log(cart)