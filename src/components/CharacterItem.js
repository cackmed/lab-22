import React from 'react';
import PropTypes from 'prop-types';

  

const CharacterItem = ({ image, name }) => (
  <>
    <figure>
      <img src={image}/>
      <p>{name}</p>
    </figure>
  </>
);

CharacterItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CharacterItem;
