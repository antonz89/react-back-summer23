const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  size: {
    type: String,
    // required: true
  },
  cost: {
    type: Number,
    // required: true
  },
  image: {
    type: String
  },
  user_id: {
    type: String,
    required: true

  }
}, { timestamps: true })

module.exports = mongoose.model('Item', itemSchema)