require("./db/connection");
const express = require("express");
const cors = require("cors");

const userRouter = require("./user/userRoutes");
const restRouter = require("./restaurants/restRoutes");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(restRouter);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})

// server.js test push
