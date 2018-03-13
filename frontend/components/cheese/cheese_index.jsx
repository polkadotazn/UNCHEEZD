import React from 'react';
import CheeseItem from './cheese_item';
import { Link } from 'react-router-dom';

class CheeseIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllCheeses();
  }

  render () {
    return (
      <div className="cheese-idx-page">
        <div className="chz-idx-top">
          <h1 className="chz-title">Cheese Board</h1>
          <Link className="add-chz-button" to="/cheeseboard/new">
            <tag className="plus">+ </tag> Add New Cheese
          </Link>
        </div>
        <ul id="all-cheeses">
          {
            this.props.cheeses.map(cheese => (
              <CheeseItem
                key={cheese.id}
                cheese={cheese} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default CheeseIndex;
