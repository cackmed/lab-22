import React from 'react';
import PropTypes from 'prop-types';

  

const CharacterItem = ({ img, name }) => (
  <>
    <li>
      <img src={img}/>
      <p>Name: {name}</p>

    </li>
  </>
);

CharacterItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CharacterItem;
