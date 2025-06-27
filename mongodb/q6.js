db.employees.find(
    {salary:{$gt:3000},department: "IT"},
    {name:1}
)

db.employees.find(
   {$or: [{salary:{$gt:3000}},{department: "IT"}]},
    {name:1}
)

db.employees.countDocuments()

db.employees.updateMany(
    {},
    {$addToSet: {location: "FL"}}
)

//revision end


//aggregation
db.employees.aggregate([
    {$match: { salary: {$gt: 2000}}},
    {$project: { name:1, salary:1}},
]);

db.employees.aggregate([
    {$match: { salary: {$gt: 2000}}},
    {$project: { name:1, salary:1}},
    {$sort: { name:1}},
    {$limit:1},
]);

db.employees.aggregate([
    {$project: { name:1, salary:1, location:1}},
]);


db.employees.aggregate([
    {$project: { _id:0,name:1, location:1}},
]);

db.employees.aggregate([
    {$project: { _id:0,name:1, location:1}},
    {$unwind: "$location"},
]);

db.employees.aggregate([
    {$project: { _id:0, Empname:"$name"}},
]);

db.employees.aggregate([
    {$project: { 
        _id:0,
        name:1,
        salary:1,
        bonus:{$multiply:["$salary",2]}
    }},
]);

db.employees.aggregate([
    {$project: {name:0}},
]);

db.employees.aggregate([
    {$group: {_id: "$department", total:{$sum: "$salary"}}}
]);

db.employees.aggregate([
    {$group: {_id: null, total:{$sum: "$salary"}}}
]);

db.orders.insertMany([
    {empId: ObjectId('685a8a7fde8fa16335b5f899'), ordervalue:1200},
    {empId: ObjectId('685bb99004abf22c99b5f899'), ordervalue:1200},
    {empId: ObjectId('685bb99004abf22c99b5f89a'), ordervalue:1200},
    {empId: ObjectId('685bca6a04abf22c99b5f89e'), ordervalue:1200},
]);

db.employees.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "empId",
            as:"orders"
        }
    }
]);

db.employees.updateOne(
    {empId: ObjectId('685a8a7fde8fa16335b5f899')},
    {$set:{ordervalue:1500}}
);

db.employees.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "empId",
            as:"orders"
        }
    },
    {$unwind: "$orders"},
    {$project:{name:1,salary:1,"orders.ordervalue":1}}
]);


db.empCountry.insertMany([
    {empId: ObjectId('685a8a7fde8fa16335b5f899'), country:"India"},
    {empId: ObjectId('685bb99004abf22c99b5f899'), country:"Russia"},
    {empId: ObjectId('685bb99004abf22c99b5f89a'), country:"Nepal"},
    {empId: ObjectId('685bca6a04abf22c99b5f89e'), country:"Indonesia"},
]);

db.employees.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "empId",
            as:"orders"
        }
    },
        {
        $lookup: {
            from: "empCountry",
            localField: "_id",
            foreignField: "empId",
            as:"empCountry"
        }
    },
    {$unwind: "$orders"},
    {$unwind: "$empCountry"},
    {$project:{name:1,salary:1,"orders.ordervalue":1,"empCountry.country":1}}
]);

db.employees.createIndex({"email":1})
db.employees.getIndexes()
db.employees.dropIndex("email_1")

db.employees.find({email:"john@gmail.com"}).explain("executionStats")

db.employees.aggregate([
    {$group:{_id:{country:"$country", name:"$name"},
total:{$sum: "$score"}}}
])

// db.employees.updateOne({_id:ObjectId('685a8a7fde8fa16335b5f899')},{$set:{country:"India"}})

// db.employees.updateOne({_id:ObjectId('685bb99004abf22c99b5f899')},{$set:{country:"Nepal"}})

db.scores.insertMany([
    {name: "Krish", country:"India", score:20},
    {name: "Krish", country:"India", score:21},
    {name: "Krish", country:"India", score:22},
    {name: "John", country:"UK", score:21},
    {name: "John", country:"UK", score:26},
    {name: "John", country:"UK", score:25},
])

db.scores.aggregate([
    {$group:{_id:{name:"$name",country:"$country"},
    total:{$sum:"$score"}}}
])