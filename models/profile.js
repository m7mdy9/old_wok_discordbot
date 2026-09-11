const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const profileSchema = mongoose.Schema({
  userId: reqString,
  coins: {
    type: Number,
    required: true,
  },
  m7card: {
    type: Number,
    required: false,
  },
})

module.exports = mongoose.model('profiles', profileSchema)