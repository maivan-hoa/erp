const express = require("express");
const router = express.Router();
const asyncMiddleware = require("../middlewares/async");
const { auth } = require("../middlewares/auth");
const { hasManageProduct } = require("../middlewares/hasManageProduct");
const productController = require("../controllers/product");

router.get("/", [auth], asyncMiddleware(productController.index));
router.post("/", [auth, hasManageProduct], asyncMiddleware(productController.store));
router.get("/:id", [auth, hasManageProduct], asyncMiddleware(productController.show));
router.put("/:id", [auth, hasManageProduct], asyncMiddleware(productController.update));
router.delete("/:id", [auth, hasManageProduct], asyncMiddleware(productController.destroy));

module.exports = router;
