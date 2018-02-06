import React from 'react';
import { Link } from 'react-router-dom';

class CheeseShow extends React.Component {
  componentDidMount () {
    this.props.requestACheese(this.props.match.params.cheeseId);
  }

  render () {
    const cheese = this.props.cheese;

    return (
      <div>
        <div>
          <h3>{cheese.name}</h3>
          {cheese.brand}
          {cheese.type}
          {cheese.origin}
          {cheese.description}
        </div>
      </div>
    );
  }
}

export default CheeseShow;
