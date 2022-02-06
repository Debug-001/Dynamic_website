const { MongoServerSelectionError } = require("mongodb");
const mongoose = require("mongoose");
const { MongoGridFSChunkError } = require("mongoose/node_modules/mongodb");

// creating a database 
// mongoose.connect("mongodb://localhost:27017/OmDynamic", {
//     // useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(() => {
//     console.log("connection successful");
// }).catch((error) => {
//     console.log(error);
// })


mongoose.connect("mongodb://future-x.herokuapp.com:27017/OmDynamic" ,
{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})

