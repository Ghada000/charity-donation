import React from 'react';
import Data from './dummyData.json';
import img1 from '../icones/star.png'

function Feedback() {
  return (
    <div className='feedback container m-3'>
      <h1 className='text-center mx-5'>Feedbacks</h1>
      <div className='d-flex row gap-3 justify-content-between'style={{width: '100%'}}> 
      {Data.map((ele) => (
        <div className= 'card  my-3 col-3 p-3 rounded-4 shadow .hover-zoom '  key={ele.id}>
          <p>{ele.user}</p>
          <h3>{ele.email}</h3>
          <div>
            {[...Array(ele.rating)].map((_, index) => (
            <img alt="Star" width={'20px'} height={'20px'} key={index} src={img1}/>
            ))}
          </div>
          <h3>{ele.comment}</h3>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Feedback;
