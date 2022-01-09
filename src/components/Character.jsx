import React from 'react';

const Character = ({ character, handleReducer }) => {
  return (
    <div className="Character-container">
      <h2>{character.name}</h2>
      <p>Species: {character.species}</p>
      <button type="button" onClick={() => handleReducer(character)}>
        Agregar a Favoritos
      </button>
    </div>
  );
};

export { Character };
