const Restaurants = require("./restModel");

// create restaurants
exports.addRest = async (req, res) => {
  try {
    const newRest = await Restaurants.create(req.body);
    res.status(200).send({ restaurants: newRest.name });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
// list all restaurants 
exports.listRest =  async (req, res) => {
  try {
      const restaurants = await Restaurants.find({});
      res.status(200).send({ restaurants })
  } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message })
  }
};

// list all american restaurants
exports.listRestAmerican =  async (req, res) => {
  try {
      const restaurantsAmerican = await Restaurants.find({cuisine: "American"});
      res.status(200).send({ restaurantsAmerican })
  } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message })
  }
};
// list all indian restaurants
exports.listRestIndian =  async (req, res) => {
  try {
      const restaurantsIndian = await Restaurants.find({cuisine: "Indian"});
      res.status(200).send({ restaurantsIndian })
  } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message })
  }
};
// list all chinese restaurants
exports.listRestChinese =  async (req, res) => {
  try {
      const restaurantsChinese = await Restaurants.find({cuisine: "Chinese"});
      res.status(200).send({ restaurantsChinese })
  } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message })
  }
};
// list all Italian restaurants
exports.listRestItalian =  async (req, res) => {
  try {
      const restaurantsItalian = await Restaurants.find({cuisine: "Italian"});
      res.status(200).send({ restaurantsItalian })
  } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message })
  }
};
// list all Turkish restaurants
exports.listRestTurkish =  async (req, res) => {
  try {
      const restaurantsTurkish = await Restaurants.find({cuisine: "Turkish"});
      res.status(200).send({ restaurantsTurkish })
  } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message })
  }
};
// list all Japanese restaurants
exports.listRestJapanese =  async (req, res) => {
  try {
      const restaurantsJapanese = await Restaurants.find({cuisine: "Japanese"});
      res.status(200).send({ restaurantsJapanese })
  } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message })
  }
};