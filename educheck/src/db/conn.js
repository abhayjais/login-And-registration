const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/educheck", {
    // useCreateIndex:true
    // useNewUrlParser:true
    // useUnifiedTopology:true
}).then(() => {
    console.log("Connection successful");
}).catch((e) => {
    console.log("Connection Failed");
}) 