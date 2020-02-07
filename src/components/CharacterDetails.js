import React from 'react';
import Proptypes from 'prop-types';
import { useCharacterDetails } from '../hooks/character';

const CharacterDetail = ({ match }) => {
  const character = useCharacterDetails(match.params.id);

  const episodeLinks = character.episode.map(url => (
    <a key={url} href={url}>Episode {url.split('/'.slice(-1)[0])}</a>
  ));
  return (
    <section>
      <h1>{character.name}</h1>
      <img src={character.image} />
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <p>{character.location}</p>
      <ul>
        {episodeLinks}
      </ul>
    </section>
  );
};

CharacterDetail.proptypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterDetail;
