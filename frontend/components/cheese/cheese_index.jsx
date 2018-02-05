import React from 'react';
import CheeseItem from './cheese_item';

class CheeseIndex extends React.Component {
  componentDidMount() {
    console.log('compdidmount');
    this.props.requestAllCheeses();
  }

  render () {
    return (
      <div>
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
