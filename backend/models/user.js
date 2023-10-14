const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const Schema = mongoose.Schema;

const userSchema = new Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {type: String, required: true, minlength: 6},
  image: {type: String, required: true},
  loads: {type: String, required: true},
  role: {type: String, required: true},
});

userSchema.plugin(uniqueValidator)

module.exports = mongoose.mongoose.model("User", userSchema)