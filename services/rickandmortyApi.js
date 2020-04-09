export const getCharacters = (pageNumber = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    .then(res => res.json())
    .then(({ results }) => results);
};

export const getCharacterDetails = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
};



