import { useState, useEffect } from 'react';
import { getCharacters, getCharacterDetails } from '../../services/rickandmortyApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(setCharacters);
  }, []);

  return characters;
};


export const useCharacterDetails = (id) => {
  const [character, setCharacter] = useState({
    episode: []
  });
  useEffect(() => {
    getCharacterDetails(id)
      .then(setCharacter);
  });

  return character;
};
