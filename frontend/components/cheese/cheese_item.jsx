import React from 'react';
import { Link } from 'react-router-dom';

const CheeseItem = ({ cheese }) => {
  console.log(cheese);
  return (
    <li>
      <Link to={`/cheeses/${cheese.id}`}>
        {cheese.name}
      </Link>
      <ul>
        <li>Brand: {cheese.brand}</li>
        <li>Type: {cheese.category}</li>
        <li>Description: {cheese.description}</li>
      </ul>
    </li>
  );
};

export default CheeseItem;







// const PokemonIndexItem = ({ pokemon }) => (
//   <li className="pokemon-index-item">
//     <Link to={`/pokemon/${pokemon.id}`}>
//       <span>{pokemon.id}</span>
//       <img src={pokemon.image_url} alt={pokemon.name} />
//       <span>{pokemon.name}</span>
//     </Link>
//   </li>
// );
//
// export default PokemonIndexItem;
