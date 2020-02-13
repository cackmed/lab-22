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

export const nextPage = () => {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPagenumber] = useState(1);
  setPagenumber(pageNumber + 1);
  getCharacters(pageNumber)
    .then(setCharacters);
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
