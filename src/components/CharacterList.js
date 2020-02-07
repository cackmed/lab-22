import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../hooks/character';
import { Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundry';


const CharacterList = () => {
  const charactersList = useCharacters();
  console.log(charactersList);
  const characterListElements = charactersList.map(character => (
    <li key={character.id}>
      <Link to={`/character/${character.id}`}>
        <ErrorBoundary>
          <CharacterItem {...character}/>
        </ErrorBoundary>
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

