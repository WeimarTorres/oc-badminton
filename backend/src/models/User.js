const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    birthdayDate: {
        type: Date,
        required: true
    }
});

module.exports = model("User", userSchema);