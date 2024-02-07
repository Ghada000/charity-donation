import React, { useState } from 'react';
import Data from './dummyData.json';
import img1 from '../icones/star.png';

function Feedback() {
  const [data, setData] = useState(Data);
  const [newReview, setNewReview] = useState({
    user: '',
    email: '',
    rating: 0,
    comment: ''
  });

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
    // Validate the form fields before adding the review
    if (!newReview.user || !newReview.email || !newReview.rating || !newReview.comment) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Create a new review object with a unique ID
    const newReviewObj = {
      id: Date.now(), // Use a timestamp as a unique ID (for simplicity)
      user: newReview.user,
      email: newReview.email,
      rating: parseInt(newReview.rating, 10),
      comment: newReview.comment
    };

    // Update the Data array with the new review
    setData((prevData) => [...prevData, newReviewObj]);

    // Reset the form fields
    setNewReview({
      user: '',
      email: '',
      rating: 0,
      comment: ''
    });

    // You can also add logic to send the new review data to an API here if needed
  };

  return (
    <div className='feedback container m-3'>
      <h1 className='text-center mx-5'>Feedbacks</h1>
      <div className='d-flex row gap-3 justify-content-between' style={{ width: '100%' }}>
        {data.map((ele) => (
          <div className='card my-3 col-3 p-3 rounded-4 shadow bg-body-tertiary' key={ele.id}>
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

      <div className="my-5">
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
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </label>
          <br />
          <label>
            Comment:
            <textarea name="comment" value={newReview.comment} onChange={handleInputChange} />
          </label>
          <br />
          <button type="button" onClick={handleAddReview}>
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;















// import React from 'react';
// import Data from './dummyData.json';
// import img1 from '../icones/star.png'

// function Feedback() {
//   return (
//     <div className='feedback container m-3'>
//       <h1 className='text-center mx-5'>Feedbacks</h1>
//       <div className='d-flex row gap-3 justify-content-between'style={{width: '100%'}}> 
//       {Data.map((ele) => (
//         <div className= 'card  my-3 col-3 p-3 rounded-4 shadow bg-body-tertiary  '  key={ele.id}>
//           <p>{ele.user}</p>
//           <h3>{ele.email}</h3>
//           <div>
//             {[...Array(ele.rating)].map((_, index) => (
//             <img alt="Star" width={'20px'} height={'20px'} key={index} src={img1}/>
//             ))}
//           </div>
//           <h3>{ele.comment}</h3>
//         </div>
//       ))}
//       </div>
//     </div>
//   );
// }

// export default Feedback;
