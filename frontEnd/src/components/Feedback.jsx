// Feedback.js
import React, { useState } from 'react';
import Data from '../dummyData.json';
import img1 from '../icones/star.png';
import './css/FeedBack.css';

function Popup({ handleClosePopup, handleAddReview, newReview, handleInputChange, handleRatingChange }) {
  return (
    <div className="overlay">
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <h2>Add a Review</h2>
        <form>
          <label>
            User:
            <input type="text" name="user" value={newReview.user} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email" value={newReview.email} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Rating:
            <select name="rating" value={newReview.rating} onChange={(e) => handleRatingChange(e.target.value)}>
              <option value={0}>Select Rating</option>
              {[1, 2, 3, 4, 5].map((option) => (
                <option key={option} value={option}>
                  {`${option} Star${option !== 1 ? 's' : ''}`}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Comment:
            <textarea name="comment" value={newReview.comment} onChange={handleInputChange} />
          </label>
          <br />
          <div className="buttons">
            <button type="button" onClick={handleAddReview}>
              Add Review
            </button>
            <button type="button" onClick={handleClosePopup}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Feedback() {
  const [data, setData] = useState(Data);
  const [newReview, setNewReview] = useState({
    user: '',
    email: '',
    rating: 0,
    comment: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setNewReview((prevReview) => ({
      ...prevReview,
      rating
    }));
  };

  const handleAddReview = () => {
    if (!newReview.user || !newReview.email || !newReview.rating || !newReview.comment) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const newReviewObj = {
      id: Date.now(),
      user: newReview.user,
      email: newReview.email,
      rating: parseInt(newReview.rating, 10),
      comment: newReview.comment
    };

    setData((prevData) => [...prevData, newReviewObj]);

    setNewReview({
      user: '',
      email: '',
      rating: 0,
      comment: ''
    });

    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="feedback container m-3">
      <h1 className="text-center mx-5">Feedbacks</h1>
      <div className="d-flex row gap-3 justify-content-between" style={{ width: '100%' }}>
        {data.map((ele) => (
          <div className="card my-3 col-3 p-3 rounded-4 shadow bg-body-tertiary" key={ele.id}>
            <p>{ele.user}</p>
            <h3>{ele.email}</h3>
            <div>
              {[...Array(ele.rating)].map((_, index) => (
                <img alt="Star" width={'20px'} height={'20px'} key={index} src={img1} />
              ))}
            </div>
            <h3>{ele.comment}</h3>
          </div>
        ))}
      </div>

      <button type="button" onClick={() => setShowPopup(true)}>
        Add Review
      </button>

      {showPopup && (
        <Popup
          handleClosePopup={handleClosePopup}
          handleAddReview={handleAddReview}
          newReview={newReview}
          handleInputChange={handleInputChange}
          handleRatingChange={handleRatingChange}
        />
      )}
    </div>
  );
}

export default Feedback;
