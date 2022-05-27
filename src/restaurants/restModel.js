// require mongoose
const mongoose = require("mongoose");

// user schema set up 
const restSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  cuisine: {
    type: String,
    required: true
  },

});

const Restaurants = mongoose.model("Restaurants", restSchema);
// export 
module.exports = Restaurants;