//spread operator
let marks={
    maths: 95,
};
marks= { ...marks, science:54};
console.log(marks)

let students=["Harsh","Ananta","Ramya"];
students=[...students, "Abhi"];
console.log(students);