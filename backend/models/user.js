const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type: String, require: true, minlenght: 3, maxlenght: 30},
    email: {
        type: String,
        require: true,
        minlenght: 3,
        maxlenght: 200,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlenght: 3,
        maxlenght: 1024
    },
})

const User = mongoose.model("User", userSchema)

exports.User = User;