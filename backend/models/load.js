const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loadSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
});

module.exports = mongoose.mongoose.model("Load", loadSchema);
