const { FORBIDDEN, HAS_MANAGE_STORE } = require("../config");

const hasManageStore = (req, res, next) => {
    if (req.userRole === HAS_MANAGE_STORE) {
        return next();
    }
    return res.sendStatus(FORBIDDEN);
};

module.exports = {
    hasManageStore,
};
