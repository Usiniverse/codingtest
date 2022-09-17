const mongoose = require("mongoose");

function connectDB() {
    return mongoose.connect("mongodb+srv://yushin:yushin1234@cluster0.rcxcjzd.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;