const express = require("express");
const cors = require("cors");
const app = express();
const logger = require("morgan");
const { PORT, mongoDbUrl } = require("./config");
const authRoute = require("./routes/auth");
const roleRoute = require("./routes/role");

require("./models");

// Middleware
app.use(logger("dev"));
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res, next) => {
    return res.status(200).json({
        message: "User service server is OK",
    });
});

app.use("/", authRoute);
app.use("/roles", roleRoute);

// 404
app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

// Handle error
app.use((err, req, res, next) => {
    const error = err || {};
    const status = err.status || 500;

    return res.status(status).json({
        error: {
            message: error.message,
        },
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`User service server is listening on port ${PORT}`);
});
