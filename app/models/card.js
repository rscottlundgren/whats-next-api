const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  arcana: { type: String },
  majorArcana: {
    analog: {
      analogFaceIMG: { type: String },
      coverIMG: { type: String },
      cardNumber: { type: Number },
      cardSuitName: { type: String },
      theme: { type: String },
      astrology_element: { type: String },
      meaningVertigo: [String],
      keywords: [String]
    },
    echo: {
      echoFaceIMG: { type: String },
      coverIMG: { type: String },
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
      analogFaceIMG: { type: String },
      coverIMG: { type: String },
      numberCourtKeys: [String],
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
      echoFaceIMG: { type: String },
      coverIMG: { type: String },
      numberCourtKeys: [String],
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
