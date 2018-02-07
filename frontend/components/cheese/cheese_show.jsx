import React from 'react';
import { Link } from 'react-router-dom';

class CheeseShow extends React.Component {
  componentDidMount () {
    this.props.requestACheese(this.props.match.params.cheeseId);
  }

  render () {
    const cheese = this.props.cheese;
    console.log(cheese);
    return (
      <div>
        {cheese &&
          <div className="show-chz-box">
            <Link className="edit-chz-button"
              to={`/cheeseboard/${cheese.id}/edit`}>
              Edit Cheese
            </Link>
            <div className="main-chz-show">
              <h3 id="chz-name">{cheese.name}</h3>
              <div id="chz-type">{cheese.brand}
              {cheese.category}
              {cheese.origin}</div>
              {cheese.description}
            </div>
            <button onClick={() => this.props.deleteCheese(cheese.id).then(() => {
                this.props.history.push("/cheeseboard");
              })}>
              Delete Cheese
            </button>
        </div>}
      </div>
    );
  }
}

export default CheeseShow;
