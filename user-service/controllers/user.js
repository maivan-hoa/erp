const User = require("../models/User");
const { NOT_FOUND, SALT_ROUNDS, AVATAR_DEFAULT, CLOUDINARY_ID_DEFAULT } = require("../config");
const bcrypt = require("bcrypt");
const cloudinary = require("../utils/cloudinary");

const index = async (req, res) => {
    const users = await User.find();
    return res.send({ status: 1, result: users });
};

const store = async (req, res) => {
    // Upload image to cloudinary
    let result;
    if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path);
    }
    // Create new user
    let user = new User({
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        date_of_birth: req.body.date_of_birth,
        store_id: req.body.store_id,
        avatar: result?.secure_url || AVATAR_DEFAULT,
        password: bcrypt.hashSync(req.body.password, SALT_ROUNDS),
        role: req.body.role,
        cloudinary_id: result?.public_id || CLOUDINARY_ID_DEFAULT,
    });
    // Save user
    await user.save();
    return res.send({ status: 1, result: user });
};

const show = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.sendStatus(NOT_FOUND);
    return res.send({ status: 1, result: user });
};

const update = async (req, res) => {
    const id = req.params.id;
    let user = await User.findById(id);
    if (!user) return res.sendStatus(NOT_FOUND);
    // Upload image to cloudinary
    let result;
    if (req.file) {
        // Delete image from cloudinary
        if (user.cloudinary_id !== CLOUDINARY_ID_DEFAULT) {
            await cloudinary.uploader.destroy(user.cloudinary_id);
        }
        result = await cloudinary.uploader.upload(req.file.path);
    }

    const data = {
        email: req.body.email || user.email,
        name: req.body.name || user.name,
        phone: req.body.phone || user.phone,
        date_of_birth: req.body.date_of_birth || user.date_of_birth,
        store_id: req.body.store_id || user.store_id,
        avatar: result?.secure_url || user.secure_url,
        role: req.body.role || user.role,
        cloudinary_id: result?.public_id || user.public_id,
    };

    user = await User.findByIdAndUpdate(id, data, { new: true });
    return res.send({ status: 1, result: user });
};

const destroy = async (req, res) => {
    const id = req.params.id;
    // Find user by id
    let user = await User.findById(id);
    if (!user) return res.sendStatus(NOT_FOUND);
    // Delete image from cloudinary
    if (user.cloudinary_id !== CLOUDINARY_ID_DEFAULT) {
        await cloudinary.uploader.destroy(user.cloudinary_id);
    }
    // Delete user from db
    await user.remove();
    return res.send({ status: 1 });
};

module.exports = {
    index,
    store,
    show,
    update,
    destroy,
};
