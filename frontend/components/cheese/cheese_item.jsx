import React from 'react';
import { Link } from 'react-router-dom';

const CheeseItem = ({ cheese }) => {
  console.log("POOP",cheese.image_path);
  let img = <img id="cheese_image" src={cheese.image_path}
    className="cheezpic" />;
  let img2 = <img id="cheese_image" src={'https://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-3.ashx?w=225&hash=664B4A9CBF037A0C73BB81D625FC69BF3206AFB9'}
    className="cheezpic" />;
  return (
    <li className="chz-item-box">
      <ul>
        <Link to={`/cheeseboard/${cheese.id}`}>
          <li id="chz-name">{cheese.name}</li>
        </Link>
        <li id="chz-brand">{cheese.brand}</li>
        <li id="chz-type">{cheese.category}</li>
        <li id="description">{cheese.description}</li>
      </ul>
      {img}
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
