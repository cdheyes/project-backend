// require Router
const { Router } = require("express");
// require functions from userController
const { addRest, listRest} = require("./restController");

// set router fucntion in variable 
const restRouter = Router();

// === routes ===

// route for adding user
restRouter.post("/rest", addRest);
// route for lsiting users
restRouter.get("/rest", listRest);


// export 
module.exports = restRouter;