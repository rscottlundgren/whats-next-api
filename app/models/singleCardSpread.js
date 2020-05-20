const mongoose = require('mongoose')

const singleCardSpreadSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  thoughts: { type: String },
  firstCardObject: {
    type: Object,
    required: false
  },
  firstCardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card',
    required: true
  },
  firstCardState: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('SingleCardSpread', singleCardSpreadSchema)
