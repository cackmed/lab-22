import React from 'react';
import PropTypes from 'prop-types';
import { useCharacterDetails } from '../hooks/character';

const CharacterDetail = ({ match }) => {
  const character = useCharacterDetails(match.params.id);

  console.log(character);
  return (
    <section>
      <h1>{character.name}</h1>
      <img src={character.image} />
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
    </section>
  );
};

CharacterDetail.propTypes = {
  match: PropTypes.object
};

export default CharacterDetail;
