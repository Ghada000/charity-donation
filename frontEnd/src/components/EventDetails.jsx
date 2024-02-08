import React, { useState } from 'react';

const EventDetails = ({ event, onBackToList }) => {
  return (
    <div>
      <h2>Event Details</h2>
      <h3>{event.title}</h3>
      <img src={event.image} alt="Event Image" style={{ width: '262px', height: '188px' }} />
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <button onClick={onBackToList}>Back to List</button>
    </div>
  );
};

export default EventDetails;
