import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { restaurantAdded } from './restaurantsSlice';

function RestaurantInput() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  function handleChange(e) {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(restaurantAdded(name));
    setName('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleChange} value={name} />
        <input type="submit" value="Add Restaurant" />
      </form>
    </div>
  );
}

export default RestaurantInput;
