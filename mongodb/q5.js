db.employees.updateOne(
    {email: "mike@gmail.com"},
    {$set:{salary:3000}}
)

db.employees.updateMany(
    {department: "IT"},
    {$set:{salary:3000}}
)

db.employees.updateMany(
    {},
    {$set:{points:1}}
)

db.employees.updateMany(
    {department: "IT"},
    {$inc:{points:1}}
)

db.employees.updateMany(
    {department: "IT"},
    {$inc:{points:3}}
)

db.employees.updateMany(
    {department: "IT"},
    {$inc:{points:-1}}
)

db.employees.updateOne(
    {email: "krish@gmail.com"},
    {$set:{name: "Krish", department:"HR", salary:2700}},
    {upsert: true}
);

db.employees.deleteOne({email: "krish@gmail.com"})

db.employees.deleteMany({department: "Admin"})

db.employees.find().sort({name:1})

db.employees.find().sort({name:-1})

db.employees.find().sort({salary:-1}).limit(1)

db.employees.find().sort({salary:-1}).limit(3)

db.employees.find({},{_id:0,Empname:"$name"})

db.employees.updateMany(
    {},
    {$rename:{points: "score"}}
)

db.employees.updateMany(
    {},
    {$unset:{score:""}}
)

//updating an array field

db.employees.updateMany(
    {},
    {$push:{points:5}}
)

db.employees.updateMany(
    {},
    {$push:{points:3}}
)

db.employees.updateMany(
    {department:"IT"},
    {$push:{points:3}}
)

db.employees.updateMany(
    {},
    {$pull:{points:{$gt:3}}}
)

 //adds to array only if it is not present
db.employees.updateMany(
    {},
    {$addToSet:{location:'LA'}}
)

db.employees.updateMany(
    {},
    {$pop:{location:1}} 
)

//removes the first element 
db.employees.updateMany(
    {},
    {$pop:{location:-1}}   
)