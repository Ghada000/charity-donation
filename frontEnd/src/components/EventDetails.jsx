import React from 'react';
import './css/Event.css';

const EventDetails = ({ event, onBackToList }) => {
  return (
    <div>
    <h6 className='title'>Event Details</h6>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card">
        <img src={event.image} className="card-img-top" alt="Event Image" style={{ height: '188px', objectFit: 'cover' }} />
        <div className="card-body">
          <h2 className="card-title text-center">{event.title}</h2>
          <p className="card-text">{event.description}</p>
          <p className="card-text"><strong>Date:</strong> {event.date}</p>
          <p className="card-text"><strong>Location:</strong> {event.location}</p>
          <button className="btn btn-primary d-block mx-auto" onClick={onBackToList}>Back to List</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventDetails;
