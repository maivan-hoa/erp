const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    date_of_birth: {
        type: String,
        required: true,
    },

    store_id: {
        type: String,
        required: true,
    },

    avatar: {
        type: String,
        default: "https://res.cloudinary.com/thiemmv-hust-1999/image/upload/v1636688309/sample.jpg",
    },

    password: {
        type: String,
        required: true,
    },

    created_at: {
        type: Date,
        default: Date.now(),
    },

    updated_at: {
        type: Date,
        default: Date.now(),
    },

    cloudinary_id: {
        type: String,
        default: "sample",
    },

    role: {
        type: Schema.Types.ObjectId,
        ref: "role",
    },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
