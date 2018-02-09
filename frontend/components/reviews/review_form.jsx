import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Rating from 'react-rating';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      review: "",
      cheese_id: this.props.cheeseId,
      user_id: this.props.userId,
      modalOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }



  modalStyle () {
    return {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
        position: 'absolute',
        top: '25%',
        left: '50%',
        width: '350px',
        transform: 'translate(-50%, 0)',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        borderRadius: '3px'
      }
    };
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state).then(() =>
      this.closeModal()
    );
  }

  renderErrors () {
    return (
      <ul className="reviewErrors">
        {
          this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)
        }
      </ul>
    );
  }

  render () {

    if(!this.state) {
      return null;
    }
    return (
      <div className="review-form-container">
        <button className="review-btn" onClick={this.openModal}>
          Review this cheese
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onrequestClose={this.state.closeModal}
          contentLabel="cheese-rating"
          className="review-modal"
          style={ this.modalStyle() }
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
        >
          <div className="inner-modal">

            <div className="modal-header">

              <h3>Leave a Review</h3>
              <img className="xMark2"
                onClick={this.closeModal}
                src="http://i66.tinypic.com/71iwxi.png"/>
            </div>
            {this.renderErrors()}
            <form onSubmit={this.handleSubmit}>
              <div className="modal-form-div">
                <div className="chz-rating">
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
                </div>
                <textarea
                  onChange={this.update('review')}
                  value={this.state.review}
                  rows="7"
                  placeholder="What did you think?"
                  cols="40"
                >
                </textarea>
                <button type="submit" className="submit-review">
                  Confirm Review
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }

}

export default withRouter(ReviewForm);
