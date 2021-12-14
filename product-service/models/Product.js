const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { PORT, BASE_URL } = require("../config");

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    count: {
        type: Number,
        required: true,
    },

    unit: {
        type: String,
        required: true,
    },

    store_id: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: false,
    },

    created_at: {
        type: Date,
        default: Date.now(),
    },

    updated_at: {
        type: Date,
        default: Date.now(),
    },

    avatar_url: {
        type: String,
        default: BASE_URL + PORT + "/uploads/default.jpg",
    },

    avatar_name: {
        type: String,
        default: "default.jpg",
    },

    store_id: {
        type: Schema.Types.ObjectId,
        ref: "store",
    },
});

const Product = mongoose.model("product", ProductSchema); // "product" sẽ được tự động chuyển thành products

module.exports = Product;
