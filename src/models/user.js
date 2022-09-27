const mongoose = require("mongoose");
// estructura del modelo de datos de nuesto usuarios
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('User', userSchema);