const express = require("express");
const router = express.Router();
const asyncMiddleware = require("../middlewares/async");
const { auth } = require("../middlewares/auth");
const { hasManageOrder } = require("../middlewares/hasManageOrder");
const orderController = require("../controllers/order");

router.get("/", [auth], asyncMiddleware(orderController.index));
router.post("/", [auth, hasManageOrder], asyncMiddleware(orderController.store));
router.get("/:id", [auth, hasManageOrder], asyncMiddleware(orderController.show));
router.put("/:id", [auth, hasManageOrder], asyncMiddleware(orderController.update));
router.delete("/:id", [auth, hasManageOrder], asyncMiddleware(orderController.destroy));

module.exports = router;
