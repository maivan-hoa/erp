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
        default: "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
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

    role: {
        type: Schema.Types.ObjectId,
        ref: "role",
    },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
