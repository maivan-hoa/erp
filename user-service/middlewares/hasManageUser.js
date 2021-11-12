const { FORBIDDEN, HAS_MANAGE_USER } = require("../config");

const hasManageUser = (req, res, next) => {
    if (req.userRole === HAS_MANAGE_USER) {
        return next();
    }
    return res.sendStatus(FORBIDDEN);
};

module.exports = {
    hasManageUser,
};
