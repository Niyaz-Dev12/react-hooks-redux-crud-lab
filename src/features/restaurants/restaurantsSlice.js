import { v4 as uuid } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    entities: [],
  },
  reducers: {
    restaurantAdded(state, action) {
      state.entities.push({ id: uuid(), name: action.payload });
    },
    restaurantRemoved(state, action) {
      const array = state.entities.filter(
        (entity) => entity.id !== action.payload
      );
      state.entities = array;
    },
  },
});

export const { restaurantAdded, restaurantRemoved } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
