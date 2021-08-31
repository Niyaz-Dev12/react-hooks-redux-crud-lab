import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    entities: [],
  },
  reducers: {
    reviewAdded(state, action) {
      // state.entities.push({
      //   comment: action.payload.comment,
      //   restaurantId: action.payload.resId,
      //   id: uuid(),
      // });
      state.entities.push({ id: uuid(), ...action.payload });
    },
    reviewRemoved(state, action) {
      const array = state.entities.filter(
        (entity) => entity.id !== action.payload
      );
      state.entities = array;
    },
  },
});

export const { reviewAdded, reviewRemoved } = reviewsSlice.actions;
export default reviewsSlice.reducer;
