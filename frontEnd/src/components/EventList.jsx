import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventList = ({ onViewDetails }) => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', image: '' });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetch('http://localhost:5000/event/getall')
      .then(response => response.json())
      .then(data => setEvents(data));
  };

  const handleDelete = (eventId) => {
    fetch(`http://localhost:5000/event/delete/${eventId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the response
        fetchEvents(); // Update the events after deletion
      });
  };

  const handleUpdate = (eventId, updatedEvent) => {
    fetch(`http://localhost:5000/event/update/${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEvent),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the response
        fetchEvents(); // Update the events after updating
      });
  };

  const handleAdd = () => {
    fetch('http://localhost:5000/event/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the response
        setNewEvent({ title: '', image: '' }); // Clear the new event form
        fetchEvents(); // Update the events after adding
      });
  };

  return (
    <div>
      <div className="mb-3">
        <h3>Add New Event</h3>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={newEvent.image}
            onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Event
        </button>
      </div>

      <div className="row">
        {events.map((ele, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card">
              <img
                className='card-img-top'
                src={ele.image}
                alt="Event Image"
                style={{ width: '100%', height: '188px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <button className="btn btn-danger mr-2" onClick={() => handleDelete(ele.id)}>
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    const updatedTitle = prompt('Enter updated title:', ele.title);
                    const updatedEvent = { ...ele, title: updatedTitle };
                    handleUpdate(ele.id, updatedEvent);
                  }}
                >
                  Update
                </button>
                <button className="btn btn-info ml-2" onClick={() => onViewDetails(ele)}>
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
