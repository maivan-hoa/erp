const express = require("express");
const router = express.Router();
const asyncMiddleware = require("../middlewares/async");
const { auth } = require("../middlewares/auth");
const { hasManageUser } = require("../middlewares/hasManageUser");
const upload = require("../utils/multer");
const userController = require("../controllers/user");

router.get("/", [auth, hasManageUser], asyncMiddleware(userController.index));
router.post("/", [auth, hasManageUser, upload.single("avatar")], asyncMiddleware(userController.store));
router.get("/:id", [auth, hasManageUser], asyncMiddleware(userController.show));
router.put("/:id", [auth, hasManageUser, upload.single("avatar")], asyncMiddleware(userController.update));
router.delete("/:id", [auth, hasManageUser], asyncMiddleware(userController.destroy));

module.exports = router;
