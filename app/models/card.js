const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  majorArcana: {
    analog: {
      analogFaceIMG: {
        type: String,
        required: true
      },
      coverIMG: {
        type: String,
        required: true
      },
      cardNumber: { type: Number },
      cardSuitName: { type: String },
      theme: { type: String },
      astrology_element: { type: String },
      meaningVertigo: [String],
      keywords: [String]
    },
    echo: {
      echoFaceIMG: {
        type: String,
        required: true
      },
      coverIMG: {
        type: String,
        required: true
      },
      cardNumber: { type: Number },
      cardSuitName: { type: String },
      theme: { type: String },
      astrology_element: { type: String },
      meaningVertigo: [String],
      keywords: [String]
    }
  },
  minorArcana: {
    analog: {
      cardNumber: { type: String },
      cardSuitName: { type: String },
      analogFaceIMG: {
        type: String,
        required: true
      },
      coverIMG: {
        type: String,
        required: true
      },
      numberKeys: [String],
      courtKeys: [String],
      suitKeys: [String],
      astrology_element: { type: String },
      elementKeys: [String],
      theme: { type: String},
      meaningVertigo: [String],
      keywords: [String]
    },
    echo: {
      cardNumber: { type: String },
      cardSuitName: { type: String },
      echoFaceIMG: {
        type: String,
        required: true
      },
      coverIMG: {
        type: String,
        required: true
      },
      numberKeys: [String],
      courtKeys: [String],
      suitKeys: [String],
      astrology_element: { type: String },
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
