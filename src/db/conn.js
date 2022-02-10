const mongoose = require("mongoose");

// creating a database 
mongoose.connect("mongodb+srv://dynamic:<password>@dynamicusr.cfskf.mongodb.net/Data", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})
