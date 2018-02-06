import React from 'react';
import CheeseItem from './cheese_item';
import { Link } from 'react-router-dom';

class CheeseIndex extends React.Component {
  componentDidMount() {
    console.log('compdidmount');
    this.props.requestAllCheeses();
  }

  render () {
    return (
      <div className="cheese-idx-page">
        <Link to="/cheese/new">Add Cheese</Link>
        <ul>
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
