use("IMDB")

// kommentar

/*
    här också
*/

// name = key
// I json måste en key ha "" runt sig
// efter : är vårt value
// filter = { "name": "Javier Johnson"} // this is an exact match
// db.warmup.find(filter)

// We can put in multiple conditions in the same filter
// find all that are ages 36-43 in the city of London but do not work in Sales
// $ne = not equal, $gte = greater than equal, $lte = less than equal
// filter = {
//     "age" : { $gte : 36, $lte: 43 }, 
//     "city": "London",
//     "department": { $ne: "Sales" }
// }
// db.warmup.find(filter)

// $and and $or takes in multiple arguments and uses an array []
// $and means that all are required, $or means that one is required
// filter = { 
//     $and: [
//         { department: "Sales" }
//     ],
//     $or: [
//         {joined_year: {$lt: 2025}},
//         {joined_year: {$gt: 2000}}
//     ]
// }

// predicate något som blir sant eller falskt. Vissa filter behöver ha ett predicate i sig

// Projection i MongoDB
// projection är samma sak som i SQL där vi skriver select FirstName from Employees. FirstName är vår projection

// filter = {department: "HR"}
// projection = {name: 1, department: 1} // we only want to see name and department in our result set

// // select name, department from users;
// db.warmup.find(filter, projection).limit(3).sort({name: -1, department: "HR"})


// Hur söker vi på fritext som SQL: SELECT * FROM ... where ... like '%value%'
// filter = {name: {$regex: "j", "$options": "i"}} // regex är regular expression. Vi söker efter j som är case insensitive eftersom options är "i"

// // kortvariant
// filter = {name: /nez$|son$/i } // sök efter ett namn som slutar på nez eller son och det ska vara case insensitive
// db.warmup.find(filter)

// Vi har två datasets till för den som vill testa mer MongoDB:
db.movies.find()
db.systembolaget.find()
