import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const EventList = ({ onViewDetails }) => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', image: '', description: '', date: '', location: '',image:' '});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const fetchEvents = () => {
    fetch('http://localhost:5000/event/getall')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  };

  const handleDelete = (eventId) => {
    fetch(`http://localhost:5000/event/${eventId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchEvents();
      })
      .catch(error => console.error('Error deleting event:', error));
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
        console.log(data);
        fetchEvents();
      })
      .catch(error => console.error('Error updating event:', error));
  };

  const handleAdd = () => {
    // Check if all required fields are provided
    if (!newEvent.title || !newEvent.image || !newEvent.description || !newEvent.date || !newEvent.location) {
      console.error('All fields (title, image, description, date, location) are required for adding an event');
      return;
    }
  
    console.log('Adding event:', newEvent);
  
    fetch('http://localhost:5000/event/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    })
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Server response:', data);
        setNewEvent({ title: '', image: '', description: '', date: '', location: '' });
        fetchEvents();
        handleClose();
      })
      .catch(error => {
        console.error('Error adding event:', error.message);
      });
  };

  return (
    <div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleShow}> Add Event</button>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="modalTitle">Title:</label>
              <input
                type="text"
                className="form-control"
                id="modalTitle"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
                <label htmlFor="modalTitle">description:</label>
              <input
                type="text"
                className="form-control"
                id="modalTitle"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              />
              <label htmlFor="modalTitle">date:</label>
              <input
                type="text"
                className="form-control"
                id="modalTitle"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
              <label htmlFor="modalTitle">location:</label>
              <input
                type="text"
                className="form-control"
                id="modalTitle"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="modalImage">Image URL:</label>
              <input
                type="text"
                className="form-control"
                id="modalImage"
                value={newEvent.image}
                onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => { handleAdd(); }}>
              Add Event
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="row">
        {events.map((ele, i) => (
          <div key={i} className="col-md-3 mb-3">
            <div className="card h-100 ">
              <img
                className='card-img-top'
                src={ele.image}
                alt="Event Image"
                style={{ width: '100%', height: '188px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between align-items-center">
                <h5 className="card-title">{ele.title}</h5>
                <button className="btn btn-danger"  style={{width:"100%"}}onClick={() => handleDelete(ele.id)}>
                  Delete
                </button>
                <button
                  className="btn btn-success" style={{width:"100%"}}
                  onClick={() => {
                    const updatedTitle = prompt('Enter updated title:', ele.title);
                    const updatedImage = prompt('Enter updated image URL:', ele.image);
                    const updatedEvent = { ...ele, title: updatedTitle, image: updatedImage };
                    handleUpdate(ele.id, updatedEvent);
                  }}
                >
                  Update
                </button>
                <button className="btn btn-primary" style={{width:"100%"}} onClick={() => onViewDetails(ele)}>
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