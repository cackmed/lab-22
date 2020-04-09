import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters, nextPage } from '../hooks/character';
import { Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundry';


const CharacterList = () => {
  const charactersList = useCharacters();
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
    <>
      <button onClick>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
      <ul>
        {characterListElements}
      </ul>
    </>
  );
};


export default CharacterList;

