const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  coverIMG: {
    type: String,
    required: true
  },
  analogFaceIMG: {
    type: String,
    required: true
  },
  echoFaceIMG: {
    type: String,
    required: true
  },
  majorArcana: {
    cardName: { type: String },
    cardNumber: { type: Number },
    analog: {
      theme: { type: String },
      astrology: { type: String },
      meaningVertigo: [String],
      keywords: [String]
    },
    echo: {
      theme: { type: String },
      astrology: { type: String },
      meaningVertigo: [String],
      keywords: [String]
    }
  },
  minorArcana: {
    cardNumber: { type: String },
    cardSuit: { type: String },
    analog: {
      numberKeys: [String],
      courtKeys: [String],
      suitKeys: [String],
      element: { type: String },
      elementKeys: [String],
      theme: { type: String},
      meaningVertigo: [String],
      keywords: [String]
    },
    echo: {
      numberKeys: [String],
      courtKeys: [String],
      suitKeys: [String],
      element: { type: String },
      elementKeys: [String],
      theme: { type: String},
      meaningVertigo: [String],
      keywords: [String]
    }
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Card', cardSchema)
