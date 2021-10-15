const express = require("express");
const app = express();
const PORT = process.env.AUTH_SERVICE_PORT || 4000;
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost/auth-service",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Auth-Service DB Connected");
    }
);

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Auth-Service at port ${PORT}`);
});
