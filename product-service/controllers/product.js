const Product = require("../models/Product");
const { PORT, BASE_URL } = require("../config");
const fs = require("fs");


const index = async (req, res) => {
    const products = await Product.find();
    return res.send({ status: 1, result: products });
};


const store = async (req, res) => {
    // Upload image
    let fileName = "";
    if (req.files != null) {
        let prev = Date.now();
        let file = req.files.avatar;
        fileName = prev + "_" + file.name;
        let uploadDir = "./public/uploads/";
        file.mv(uploadDir + fileName, (error) => {
            if (error) {
                throw error;
            }
        });
    }
    // Create new product
    let product = new Product();
    product.name = req.body.name;
    product.price = req.body.price;
    product.count = req.body.count;
    product.store_id = req.body.store_id;
    product.unit = req.body.unit;
    product.description = req.body.description;

    if (fileName !== "") {
        product.avatar_url = BASE_URL + PORT + "/uploads/" + fileName;
        product.avatar_name = fileName;
    }
    // Save user
    product = await product.save();
    return res.send({ status: 1, result: product });
};


const show = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) return res.sendStatus(NOTFOUND);
    return res.send({ status: 1, result: product });
};


const update = async (req, res) => {
    const id = req.params.id;
    let product = await Product.findById(id);
    if (!product) return res.sendStatus(NOTFOUND);

    // Upload image
    let fileName = "";
    if (req.files != null) {
        if (product.avatar_name !== "default.jpg") {
            fs.unlinkSync("./public/uploads/" + product.avatar_name);
        }
        let prev = Date.now();
        let file = req.files.avatar;
        fileName = prev + "_" + file.name;
        let uploadDir = "./public/uploads/";
        file.mv(uploadDir + fileName, (error) => {
            if (error) {
                throw error;
            }
        });
    }

    const data = {
        name: req.body.name || product.name,
        price: req.body.price || product.price,
        count: req.body.count || product.count,
        unit: req.body.unit || product.unit,
        store_id: req.body.store_id || product.store_id,
        description: req.body.description || product.description,
    };

    if (fileName !== "") {
        data.avatar_url = BASE_URL + PORT + "/uploads/" + fileName;
        data.avatar_name = fileName;
    }

    product = await Product.findByIdAndUpdate(id, data, { new: true });
    return res.send({ status: 1, result: product });
};


const destroy = async (req, res) => {
    const id = req.params.id;
    const product = await Store.findByIdAndDelete(id).lean();
    if (!product) return res.sendStatus(NOT_FOUND);

    if (product.avatar_name !== "default.jpg") {
        fs.unlinkSync("./public/uploads/" + product.avatar_name);
    }

    return res.send({ status: 1, result: product });
};


module.exports = {
    index,
    store,
    show,
    update,
    destroy,
};


