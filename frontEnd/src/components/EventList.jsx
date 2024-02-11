import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const EventList = ({ onViewDetails }) => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', image: '' });
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
        setNewEvent({ title: '', image: '' });
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

        {/* Modal for adding events */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Form inside the modal */}
            <div className="form-group">
              <label htmlFor="modalTitle">Title:</label>
              <input
                type="text"
                className="form-control"
                id="modalTitle"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
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
                    const updatedImage = prompt('Enter updated image URL:', ele.image);
                    const updatedEvent = { ...ele, title: updatedTitle, image: updatedImage };
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
