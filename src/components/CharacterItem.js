import React from 'react';
import PropTypes from 'prop-types';

  

const CharacterItem = ({ img, onClick }) => (
  <>
    <li>
      <img src={img} onClick={onClick}/>
    </li>
  </>
);

CharacterItem.propTypes = {
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CharacterItem;
