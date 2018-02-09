import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Rating from 'react-rating';
// import * as FA from '../../../node_modules/font-awesome/css/font-awesome.min.css';

class CheckinsFormModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      comment: "",
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if(this.props.formType === 'edit') {
      this.setState( this.props.checkinToChange );
    }
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  update(field) {
    return (e) => {
      this.setState( { [field]: e.target.value } );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let action = (this.props.formType === 'edit') ? this.props.updateCheckin : this.props.createCheckin;
    action({id: this.props.checkin.id,
            rating:`${this.state.rating}`,
            comment:`${this.state.comment}`,
            wine_id: this.props.wine.id,
            user_id: this.props.currentUser.id })
      .then( () => this.closeModal() );
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {
          this.props.errors.map((e, idx) => <li key={`error-${idx}`}>{ e }</li>)
        }
      </ul>
    );
  }

  modalStyle() {
    return {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(0, 0, 0, 0.75)'
    },
    content : {
      position                   : 'absolute',
      top                        : '25%',
      left                       : '50%',
      transform                  : 'translate(-50%, 0)',
      bottom                     : 'auto',
      border                     : '1px solid #ccc',
      background                 : '#f5f2e8',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px'

      }
    };
  }

  renderButtonStyle(){
    let buttonText = "Check-in";
    if (this.props.formType === 'edit') {
      buttonText = "Edit";
    }
    return buttonText;
  }

  render() {
    if(!this.props.wine){
      return null;
    }
    return(
      <div className="align-btn">
        <button onClick={this.openModal}>{this.renderButtonStyle()}</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="wine-rating"
          style={ this.modalStyle() }>
            <div className="modal-wrapper">
              <div className="header">
                <h2>How was the {this.props.wine.wine_type}?</h2>
              </div>
              <form onSubmit={this.handleSubmit}>
                <Rating
                  className="star-rating"
                  empty="fa fa-star-o fa-2x"
                  full="fa fa-star fa-2x"
                  onChange={ (rating) => this.setState({rating: rating}) }
                  initialRate={this.state.rating}
                />
                <div>
                  <textarea
                    onChange={this.update('comment')}
                    value={this.state.comment}
                    rows="7"
                    cols="33"
                    >
                  </textarea>
                </div>
                <div className="input-btn">
                  <button
                    type="submit"
                  >Submit</button>
                </div>
              </form>
            </div>
        </Modal>
      </div>
    );
  }
}

export default CheckinsFormModal;
