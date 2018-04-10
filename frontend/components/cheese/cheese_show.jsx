import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';

class CheeseShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {averageRating: 0};
  }
  componentWillMount () {
    this.props.requestACheese(this.props.match.params.cheeseId);
    let that = this;
    this.props.requestAllReviews();
  // expected output: "Success!"

  //   let cheeseReviews = this.props.reviews;
  //   console.log("DSFSDFSDFDS",cheeseReviews);
  //
  //   this.setState({averageRating: cheeseReviews.reduce((acc,currentReview) => {
  //       return acc + currentReview.rating;
  //
  //   },0) / cheeseReviews.length}
  // );
  }

  render () {
    let ratings = [];
    Object.values(this.props.reviews).forEach(obj => {
      if(obj.cheese_id === this.props.match.params.cheeseId) {
        ratings.push(obj.rating);
      }
    });
    let avgRating = (ratings.reduce((acc,number) => {
      return acc + number;

    },0) / ratings.length).toFixed(2);
    let theAvgRating;
    if (avgRating) {
      theAvgRating = `(${avgRating})`;
    }
    const cheese = this.props.cheese;
    return (
      <div>
        {cheese &&
          <div className="show-chz-box">

            <div className="show-chz-header">
              <h3 id="chz-show-title">{cheese.name}</h3>
              <div id="show-buttons">
                <Link className="edit-chz-button"
                  to={`/cheeseboard/${cheese.id}/edit`}>
                  Edit Cheese
                </Link>
                <button id="delete-chz" onClick={() => this.props.deleteCheese(cheese.id).then(() => {
                    this.props.history.push("/cheeseboard");
                  })}>
                  Delete Cheese
                </button>
              </div>
            </div>

            <div className="main-chz-show">
              <div id="chz-type">
                <li>brand: <b>{cheese.brand}</b></li>
                <li>type: <b>{cheese.category}</b></li>
                <li>from: <b>{cheese.origin}</b></li>
              </div>

              <div className="avg-rating-box">
                <div className="average-rating">
                  <Rating
                    className="star-rating"
                    emptySymbol={<img src="http://i68.tinypic.com/21l06bn.png"
                      className="star" id="emptyCheese"/>}
                    fullSymbol={<img src="http://i68.tinypic.com/15czlvt.png"
                      className="star" id="fullCheese"/>}
                    initialRating={avgRating}
                    fractions={10}
                    readonly={true}
                  />
                </div>
                <div className="avg-rating-txt">{theAvgRating}</div>
              </div>

              {cheese.description}

            </div>

            <div className="chz-review-box">
              <header className="review-header">
                <h3>Reviews</h3>
                <ReviewFormContainer />
              </header>
              <ul>
                <ReviewIndexContainer />
              </ul>
            </div>

          </div>
        }
      </div>
    );
  }
}

export default CheeseShow;
