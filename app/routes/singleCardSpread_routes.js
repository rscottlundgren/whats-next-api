// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for singleCardSpreads
const SingleCardSpread = require('../models/singleCardSpread')
const Card = require('../models/card')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { singleCardSpread: { title: '', text: 'foo' } } -> { singleCardSpread: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /singleCardSpreads
router.get('/singleCardSpreads', requireToken, (req, res, next) => {
  SingleCardSpread.find()
    .then(singleCardSpreads => {
      // `singleCardSpreads` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return singleCardSpreads.map(singleCardSpread => singleCardSpread.toObject())
    })
    // respond with status 200 and JSON of the singleCardSpreads
    .then(singleCardSpreads => res.status(200).json({ singleCardSpreads: singleCardSpreads }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /singleCardSpreads/5a7db6c74d55bc51bdf39793
router.get('/singleCardSpreads/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  SingleCardSpread.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "singleCardSpread" JSON
    .then(singleCardSpread => res.status(200).json({ singleCardSpread: singleCardSpread.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /singleCardSpreads
router.post('/singleCardSpreads', requireToken, (req, res, next) => {
  // set owner of new singleCardSpread to be current user
  req.body.singleCardSpread.owner = req.user.id
  // Collects all the cards in the Tarot deck
  Card.find()
    // For Three-Card/Celtic Cross: Line 75 should become a multi-line function
    // for the use of an array (object?) - specifically to repeat the process of
    // selecting a random card, pushing to the array, and repeating until the
    // array is full

    // Looks through the cards in the Tarot Deck and selecting a random whole
    // number and using that to choose the card from that location in the array
    .then(cards => {
      console.log(cards)
      return cards[Math.floor(Math.random() * (cards.length - 1))]
    })
    // Assigns that card's _id to the firstCard object in the model
    .then(card => {
      console.log(card)
      req.body.singleCardSpread.firstCardObject = card
      req.body.singleCardSpread.firstCardId = card.id
      // req.body.singleCardSpread.actualCard = card
      return req.body.singleCardSpread
    })
    // Randomly selects a number
    .then(() => {
      // If that number is less than or equal to 0.5
      if (Math.random() <= 0.5) {
        // Assign 'analog' as the value to firstCardState
        req.body.singleCardSpread.firstCardState = 'analog'
      // If that number is greater than 0.5
      } else {
        // Assign 'echo' as the value to firstCardState
        req.body.singleCardSpread.firstCardState = 'echo'
      }
    })
    // Create a singleCardSpread using the model
    .then(() => SingleCardSpread.create(req.body.singleCardSpread))
    // respond to succesful `create` with status 201 and JSON of new
    // "singleCardSpread"
    .then(singleCardSpread => {
      // When creating the model, populate the "owner" and the "firstCard"
      // values with all details
      res.status(201).json({ singleCardSpread: singleCardSpread.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /singleCardSpreads/5a7db6c74d55bc51bdf39793
router.patch('/singleCardSpreads/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.singleCardSpread.owner

  SingleCardSpread.findById(req.params.id)
    .then(handle404)
    .then(singleCardSpread => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, singleCardSpread)

      // pass the result of Mongoose's `.update` to the next `.then`
      return singleCardSpread.updateOne(req.body.singleCardSpread)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /singleCardSpreads/5a7db6c74d55bc51bdf39793
router.delete('/singleCardSpreads/:id', requireToken, (req, res, next) => {
  SingleCardSpread.findById(req.params.id)
    .then(handle404)
    .then(singleCardSpread => {
      // throw an error if current user doesn't own `singleCardSpread`
      requireOwnership(req, singleCardSpread)
      // delete the singleCardSpread ONLY IF the above didn't throw
      singleCardSpread.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
