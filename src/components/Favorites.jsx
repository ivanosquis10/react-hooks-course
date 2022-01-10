import React from 'react';

const Favorites = ({ favorite }) => {
  return <img src={favorite.image} alt={favorite.name} />;
};

export { Favorites };
