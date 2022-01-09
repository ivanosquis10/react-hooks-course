import { useEffect, useState } from 'react';

// const API = 'https://rickandmortyapi.com/api/character/';

const useCharacters = (url) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    // fetch(API)
    //       .then(response => response.json())
    //       .then( data => setCharacters(data.results));

    getCharacters();
  }, [url]);

  return characters;
};

export { useCharacters };
