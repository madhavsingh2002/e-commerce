import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Review = ({ productId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState([]);
  
    // Load reviews from local storage on component mount
    useEffect(() => {
      const storedReviews = localStorage.getItem("reviews");
      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
      }
    }, []);
  
    useEffect(() => {
      // Save reviews to local storage whenever they change
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }, [reviews]);
  
    const handleRatingChange = (event) => {
      setRating(parseInt(event.target.value, 10));
    };
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const newReview = { rating, comment };
      setReviews([...reviews, newReview]);
  
      setRating(0);
      setComment("");
  
      toast.success("Review submitted successfully");
    };

  return (
    <div className="review-section">
      <form className="card p-3" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="rating">Rating:</label><br/>
          <select
            id="rating"
            name="rating"
            value={rating}
            onChange={handleRatingChange}
            required
          >
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="comment">Comment:</label><br/>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            className="p-3"
            onChange={handleCommentChange}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn-main">
            Submit Review
          </button>
        </div>
      </form>

      <div className="reviews-list">
        <h2>Reviews</h2>
        {reviews.length === 0 && <p>No reviews yet.</p>}
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
