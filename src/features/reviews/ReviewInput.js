import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reviewAdded } from './reviewsSlice';

function ReviewInput({ restaurantId, reviews }) {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  function handleChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(reviewAdded({ comment, restaurantId }));
    setComment('');
  }

  // adding specific reviews to restaurants

  // const sortedReview = reviews.filter(
  //   (review) => review.restaurantId === restaurantId
  // );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="review">
          Comment
          <textarea onChange={handleChange} value={comment} id="review" />
        </label>
        <button type="submit">Add Review</button>
      </form>
      {/*my way Reviews component here with sortedReview as prop */}
      {/* <Reviews reviews={sortedReview} /> */}
    </div>
  );
}

export default ReviewInput;
