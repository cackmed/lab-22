import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../hooks/character';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const charactersList = useCharacters();

  const characterListElements = charactersList.map(character => (
    <li key={character.id}>
      <Link to={`/character${character.id}`}>
        <CharacterItem {...character}/>
      </Link>
    </li>
  ));

  return (
    <ul>
      {characterListElements}
    </ul>
  );
};


export default CharacterList;

