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