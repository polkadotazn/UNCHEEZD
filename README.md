![splash page](http://i64.tinypic.com/2gvpoo0.png)
# UNCHEEZD
**Discover your new favorite cheese at** [UNCHEEZD Live](https://uncheezd.herokuapp.com/#/)

## Overview
This repository contains the application for UNCHEEZD, a site inspired by UNTAPPD. Instead of rating beers, users can rate their favorite cheeses. They can browse cheeses and see which cheeses other people are eating. Using this site, users not only get a chance to share their opinions and thoughts on the cheeses that they consume, but they can also discover other cheeses to try.

## Technologies Used
The backend of the project was built using Ruby on Rails, with a PostgreSQL database. AJAX and JSON were used to fetch data as objects to send to the frontend. Frontend rendering was created using Javascript, React and Redux. Styling was done using SASS.
## Features
#### Authentication
![sign up!](http://i63.tinypic.com/123t9ht.png)<br>
Single layer authentication was created from scratch with the BCrypt gem and SecureRandom hashing. Right now, users are able to either create an account and log in, or log in through a guest account. Errors are rendered if there are sign in or log in issues.
#### Cheese Board
![cheeeeese](http://i67.tinypic.com/2hz0d2w.png)<br>
Once logged in, users are able to browse cheeses, add a cheese, remove cheeses, and edit cheeses. They are also able to go to individual cheese pages and see cheese reviews.
#### Cheese Reviews
![critic](http://i66.tinypic.com/2ivxxz4.png)<br>
If they try a particular cheese and have a desire to rate it, they have the ability to do that as well. Cheeses can be rated on a 5-cheese scale, facilitated using a react-rating package with custom cheese icons (in the place of stars).
#### Database
The schema for the database may be found in the [UNCHEEZD wiki](https://github.com/polkadotazn/UNCHEEZD/wiki).
## Highlights
It was really fun implementing novel features, such as the cheese/star ratings and making modal forms. I think it makes the site more interesting and customized.
```javascript
<Rating
  className="star-rating"
  emptySymbol={<img src="http://i68.tinypic.com/21l06bn.png"
    className="star" id="emptyCheese"/>}
  fullSymbol={<img src="http://i68.tinypic.com/15czlvt.png"
    className="star" id="fullCheese"/>}
  onChange={(rating) => this.setState({rating: rating})}
  initialRating={this.state.rating}
  fractions={2}
/>
```
## Future Directions
1. Implement search by cheese, cheese type, or cheese brand
2. Review Feed - users can see what recent cheese reviews have been made
3. User profiles - users can see their own recent activity and that of other users
4. Friendships - users can follow fellow cheese eaters
5. Tags - Cheeses will have flavor tags, so that they can be searched based on flavors and so that users can choose from a uniform set of approved flavors to develop a more standardized cheese description for each cheese
6. Badges - Users can earn badges based on the cheeses they've tried.
7. Improve overall look of the site!
8. Better security - users will only be able to edit and add cheeses based on moderator approval, and they will only be able to delete cheeses and reviews that they have authored.
Thank you for reading! I hope you discover a new cheese :)
