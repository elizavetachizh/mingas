import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

export default function Stars() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            ></FaStar>
          </label>
        );
      })}
      {/*<p> Ваша оценка: {rating}</p>*/}
    </div>
  );
}
