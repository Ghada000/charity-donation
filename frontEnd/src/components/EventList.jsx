import React, { useState, useEffect } from 'react';

const EventList = ({ onViewDetails }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/event/getall')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div>
      {events.map((ele, i) => (
        <div key={i} onClick={() => onViewDetails(ele)}>
          <p>{ele.title}</p>
          <img
            className='event'
            src={ele.image}
            alt="Event Image"
            style={{ width: '262px', height: '188px' }}
          />
        </div>
      ))}
    </div>
  );
};

export default EventList;
