const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { PORT, BASE_URL } = require("../config");

const OrderSchema = new Schema({
    order_id: {
        type: String,
        required: true,
    },

    customer_name: {
        type: String,
        required: false,
    },

    customer_phone: {
        type: String,
        required: false,
    },

    created_at: {
        type: Date,
        default: Date.now(),
    },

    total_money: {
        type: Number,
        require: true,
    },

    list_product: {
        type: Array,
        require: true,
        default: [],
    },

    store_id: {
        type: Schema.Types.ObjectId,
        ref: "store",
    },
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
