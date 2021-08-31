import React from 'react';
import Restaurant from './Restaurant';

function Restaurants({ restaurants }) {
  const restaurantArr = restaurants.map((restaurant) => (
    <Restaurant key={restaurant.id} restaurant={restaurant} />
  ));

  return <ul>{restaurantArr}</ul>;
}

export default Restaurants;
