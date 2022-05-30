// require Router
const { Router } = require("express");
// require functions from userController
const { addRest, findCuisine} = require("./restController");

// set router fucntion in variable 
const restRouter = Router();

// === routes ===

// route for adding user
restRouter.post("/rest", addRest);

// filter unction by cuisine
restRouter.get("/rest/:cuisine", findCuisine);

// old code 

// route for lsiting users
// restRouter.get("/rest", listRest);
// // route for listing american rest
// restRouter.get("/rest/american", listRestAmerican);
// // route for listing maerican rest
// restRouter.get("/rest/italian", listRestItalian);
// // route for listing indian rest
// restRouter.get("/rest/indian", listRestIndian);
// // route for listing Chinese rest
// restRouter.get("/rest/chinese", listRestChinese);
// // route for listing turkish rest
// restRouter.get("/rest/turkish", listRestTurkish);
// // route for listing japanese rest
// restRouter.get("/rest/japanese", listRestJapanese);

// export 
module.exports = restRouter;