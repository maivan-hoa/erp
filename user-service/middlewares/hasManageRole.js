const { FORBIDDEN, HAS_MANAGE_ROLE } = require("../config");

const hasManageRole = (req, res, next) => {
    if (req.userRole === HAS_MANAGE_ROLE) {
        return next();
    }
    return res.sendStatus(FORBIDDEN);
};

module.exports = {
    hasManageRole,
};
