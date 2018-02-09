import React from 'react';
import { Link } from 'react-router-dom';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';

class CheeseShow extends React.Component {
  componentDidMount () {
    this.props.requestACheese(this.props.match.params.cheeseId);
  }

  render () {
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
