import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from 'react';

import { useCharacters } from '../hooks/useCharacter';
import { Character } from './Character';
import { Search } from './Search';

const API = 'https://rickandmortyapi.com/api/character/';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FROM_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites.filter((fav) => fav !== action.payload)],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);
  const characters = useCharacters(API);

  const handleReducer = (favorite) => {
    dispatch({
      type: isFavorite(favorite) ? 'REMOVE_FROM_FAVORITE' : 'ADD_TO_FAVORITE',
      payload: favorite,
    });
  };

  const isFavorite = (favorite) =>
    favorites.favorites.find((character) => character.id === favorite.id);

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // const filteredCharacters = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredCharacters = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="characters">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      {filteredCharacters.map((character) => (
        <Character
          character={character}
          key={character.id}
          handleReducer={handleReducer}
        />
      ))}
    </div>
  );
};

export { Characters };
