const mongoose = require('mongoose')

const singleCardSpreadSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  firstCard: {
    type: Object,
    required: false
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
