import React from 'react';
import CharacterItem from './CharacterItem';
import PropTypes from 'prop-types';


const CharacterList = (el) => (
  <>
    <ul>
      <CharacterItem img={el.image} onClick={onClick}/> 
    </ul>
  </>
);

CharacterList.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CharacterList;

