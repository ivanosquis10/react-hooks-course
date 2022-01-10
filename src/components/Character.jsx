import React from 'react';
import '../styles/Character.css';

const Character = ({ character, handleReducer }) => {
  return (
    <div className="Character-container">
      <div className="Character-img">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="Character-info">
        <h2>{character.name}</h2>
        <p>
          <b> Species: </b> {character.species}
        </p>
        <p>
          <b> Planet: </b> {character.origin.name}
        </p>
        <p>
          <b> Status: </b> {character.status}
        </p>
        <button
          className="favorite-btn"
          type="button"
          onClick={() => handleReducer(character)}
        >
          Add Favorites
          <span className="icon-heart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export { Character };
