require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use("/api/users", userRouter);


app.listen(4362, () =>
    console.log(`Server Started at Port: http://localhost:${4362}`)
);