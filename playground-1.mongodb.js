use("IMDB")

// kommentar

/*
    här också
*/

// name = key
// I json måste en key ha "" runt sig
// efter : är vårt value
// filter = { "name": "Javier Johnson"}

// We can put in multiple conditions in the same filter
// filter = {
//     "age" : { $gte : 36, $lte: 43 }, 
//     "city": "London",
//     "department": { $ne: "Sales" }
// }


// filter = { 
//     $and: [
//         { department: "Sales" }
//     ],
//     $or: [
//         {joined_year: {$lt: 2025}},
//         {joined_year: {$gt: 2000}}
//     ]
// }

// predicate något som blir sant eller falskt

// Projection i MongoDB
// filter = {department: "HR"}

// projection = {name: 1, department: 1}

// // select name, department from users;
// db.warmup.find(filter, projection).limit(3).sort({name: -1, department: "HR"})


// Hur söker vi like '%value%'
// filter = {name: {$regex: "j", "$options": "i"}}

// // kortvariant
// filter = {name: /nez$|son$/i }
db.systembolaget.find()