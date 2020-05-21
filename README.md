# What's Next - API (v1)

## Description
"What's Next" is a single page Tarot application designed to serve as a resource for users who would like to have their questions answered by the cards. The name is derived from President Bartlet's famous line from 'The West Wing', "What's next?". The application has a pre-defined, uneditable deck of 78 tarot cards. The specific deck used for this v1 application is "The Vertigo Tarot" inspired by the "Sandman" comics. For v1, a user can create a "single card spread" to answer their question, which when typed into the form and submitted to the API, will generate a randomly selected card and, for that card, a randomly selected orientation (right-side up/upside down) which the user will then use to interpret the answer to the question they have posed by entering their thoughts into the text box field. The user will have the ability to see all readings, update a their thoughts and delete their thoughts on a specific reading - however they are not going to be able to delete the specific reading itself. This was a conscious decision based on the idea that, typically, a user will delete something because they do not like it, thus they might delete a reading because they do not like the answer they received. If this were an in-person reading, the astrologer would commonly say that just because a user/client doesn't like the reading doesn't make it any less valid. This is why you can only submit, update, and delete your interpretations of the reading.

## Relevant Links
Full-Stack: | Link To: | URL:
------------|----------|--------------------------------------------------------
Front-End   | Website  | https://rscottlundgren.github.io/whats-next-client/#/
------------|----------|--------------------------------------------------------
Front-End   | GitHub   | https://github.com/rscottlundgren/whats-next-client
------------|----------|--------------------------------------------------------
Back-End    | Website  | https://gentle-cliffs-56174.herokuapp.com/
------------|----------|--------------------------------------------------------
Back-End    | GitHub   | https://github.com/rscottlundgren/whats-next-api

## Installation Instructions


## List of Technologies Used
- React template
- Axios
- Custom-Built API
- Express
- MongoDB/Mongoose
- JavaScript
- HTML
- CSS/SASS
- Postman
- Bootstrap
- Flexbox
- React

## Wireframes & ERD
- [Wireframe](https://i.imgur.com/tLssMXr.png)
- [ERD](https://i.imgur.com/6Vi6tx9.png)

## App v1 Images
![App Image 1](public/image1.png)
![App Image 2](public/image2.png)
![App Image 3](public/image3.png)
![App Image 4](public/image4.png)

## User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a new reading to answer a question I posed to the application.
- As a signed in user, I would like to create and post my thoughts on the reading I received in response to my question.
- As a signed in user, I would like to update my thoughts on the reading I received in response to my question.
- As a signed in user, I would like to delete my thoughts on the reading I received in response to my question.
- As a signed in user, I would like to see all of the readings I have requested.

## Planning
Prior to the project (at around the time the second project had been assigned) I had given some thought to how I might create an app like this. Originally, the idea was inspired by a [digital deck of cards](https://deck.of.cards/). A later version concept would be to have a deck of cards that would have the same malleability as the website that inspired the original idea, allowing the user to perform any number of divinatory spreads. To start, however, I wanted to create a simple site that would allow for a single card spread to be performed, providing details, and an opportunity to update and delete thoughts at any point after the initial reading.

For those that are unfamiliar, each individual card has a relatively unique set of correspondences. Those correspondences also help to create the four minor arcana and the larger, major arcana. Each card also balances/plays off the correspondences off each other card that is placed down in the reading (upright (analog) or upside down (echo)) based off positioning. With this understanding in mind I knew that I would need to work with something that could provide a strict scaffold of data, but would also be malleable/fluid in its interactions with other data structures like itself - so I settled on using MongoDB/Express for the backend (a framework I'm developing a stronger understanding in, though that understanding is hard-won).

For the front end I knew that, eventually, I'd want a smooth and feature-rich UI. I also wanted more exposure to the React framework which inspired me to try working with the React Auth Template through GA instead of the Browser Template I had worked with for the prior three projects. This provided an added challenge - I've had an incredibly hard time grasping the React framework and it has been slow goings working with it.

In all, these three challenges proved to be a lot more of a combined hurdle than I anticipated. Despite having done some decent preparatory work, creating my ERDs and Wireframes, not having a sound enough grasp of React's principles proved to be an incredibly large obstacle. In addition to all of this, after initially structuring the data I discovered that I had made a mistake in formatting which resulted in me deleting the original database of 78 cards and having to create them all over again.

Throughout my experience I have relied heavily upon the expertise of my instructors, the assistance of my classmates, and various videos and online tutorials to provide me with a better understanding of React so I could move with greater alacrity through the creation process. While the process is still challenging, it has been incredibly rewarding - as each foundational principle is mastered it becomes easier to understand the next concept and, in addition, to troubleshoot those problems that I run at later points in the code.

## Using The API
### Single Card Spread - UPDATE
```
axios({
      url: `${apiUrl}/singleCardSpreads/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        'singleCardSpread': {
          'thoughts': `${this.state.thoughts}`
        }
      }
    })
```

### Single Card Spread - DESTROY
```
axios({
      url: `${apiUrl}/singleCardSpreads/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
```

### Single Card Spread - CREATE
```
axios({
      url: `${apiUrl}/singleCardSpreads`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: {
        'singleCardSpread': {
          question
        }
      }
    })
```

### Single Card Spread - READ
```
axios({
      url: `${apiUrl}/singleCardSpreads/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
```

## Journal & Challenges-of-Note


## Unsolved Problems
* [ ]
* [ ]
* [ ]
* [ ]

## Future Goals
* [ ] __:__ TBD
* [ ] __TBD:__ TBD
* [ ] __TBD:__ TBD
* [ ] __Preferred Decks for Users:__ Adding a "Preferred" or "Favorite" deck for a user so they aren't restricted to using one deck that they may not like or, alternatively, having multiple decks where they specify a certain deck for a specific reading.
* [ ] __Additional Deck Images:__ At some point I would like to add future decks/images to the application including, but not limited to, the following:
    * [ ] Rider-Waite
    * [ ] Tattoo
    * [ ] Mythic
    * [ ] Dreaming Way
    * [ ] Barbara Walker
    * [ ] Manzel's Tarot II
    * [ ] Next World
    * [ ] Ellis
    * [ ] Marseille
    * [ ] Illuminated
    * [ ] Wild Unknown
    * [ ] Neon Moon
    * [ ] Mystic Mondays
    * [ ] Justice League

## Special Thanks
A special thank you goes out to the following people (in no particular, yet alphabetical by first name, order):

- Alex Beers
- Angelique Marquina
- Ben Jenkins
- Brandon DePalmaFarr
- Brian Dorgan
- Chris Kennelly
- Dan Powers
- Eron Salling
- Esat Ozen
- Frank Luis-Ravelo
- Hannah See
- Jeffrey Springwater
- Jennifer Payano
- John Lucker
- Kane Two Feathers
- Ladybug Dorgan-Lundgren
- Liz Cramer Fox
- Matt Siperko
- Megan Tsai
- Mike Finneran
- Mike Tripp
- Murat Alayurt
- Naida Rosenberger
- Nick Solie
- Randy Dorgan-Lundgren
- Rick Wilcoxen
- Ross Northrop
- Ryry Tillman-French
- Tal Aharon
- Thanh "T" Nguyen
- Trey Hilson
- Youri Francois
