import React from 'react';
import Review from './Review';

function Reviews({ reviews }) {
  const reviewArr = reviews.map((review) => (
    <Review key={review.id} review={review} />
  ));

  return <ul>{reviewArr}</ul>;
}

export default Reviews;
