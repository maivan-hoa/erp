const { FORBIDDEN } = require("../config");

const hasManageRole = (req, res, next) => {
    if (req.userRole === "giam-doc") {
        return next();
    }
    return res.sendStatus(FORBIDDEN);
};

module.exports = {
    hasManageRole,
};
