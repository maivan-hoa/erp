const Order = require("../models/Order");
const { PORT, BASE_URL } = require("../config");


const index = async (req, res) => {
    const orders = await Order.find();
    return res.send({ status: 1, result: orders });
};


const store = async (req, res) => {
    // Create new product
    let order = new Order();
    order.customer_name = req.body.customer_name;
    order.customer_phone = req.body.customer_phone;
    order.total_money = req.body.total_money;
    order.store_id = req.body.store_id;
    order.list_product = req.body.list_product;

    // Save
    order = await order.save();
    return res.send({ status: 1, result: order });
};


const show = async (req, res) => {
    const id = req.params.id;
    const order = await Order.findById(id);
    if (!order) return res.sendStatus(NOTFOUND);
    return res.send({ status: 1, result: order });
};


const update = async (req, res) => {
    const id = req.params.id;
    let order = await Order.findById(id);
    if (!order) return res.sendStatus(NOTFOUND);

    const data = {
        customer_name: req.body.customer_name || order.customer_name,
        customer_phone: req.body.customer_phone || order.customer_phone,
        total_money: req.body.total_money || order.total_money,
        store_id: req.body.store_id || order.store_id,
        list_product: req.body.list_product || order.list_product,
    };

    order = await Order.findByIdAndUpdate(id, data, { new: true });
    return res.send({ status: 1, result: order });
};


const destroy = async (req, res) => {
    const id = req.params.id;
    const order = await Order.findByIdAndDelete(id).lean();
    if (!order) return res.sendStatus(NOT_FOUND);


    return res.send({ status: 1, result: order });
};


module.exports = {
    index,
    store,
    show,
    update,
    destroy,
};


