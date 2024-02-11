import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';


function Blood() {
    const [data, setData] = useState([]);
    const [newBloodType, setNewBloodType] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:5000/blood/get')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleAddBlood = () => {
        axios.post('http://localhost:5000/blood/', {
            blood_type: newBloodType,
            image_url: newImageUrl
        })
        .then(function (response) {
            console.log(response);
            fetchData();
            setNewBloodType('');
            setNewImageUrl('');
            setShowModal(false);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const handleDeleteBlood = (id) => {
        axios.delete(`http://localhost:5000/blood/${id}`)
            .then(function (response) {
                console.log(response);
                fetchData();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 title">Blood Types</h2>
            <div className='blood-container'>
                {data.map((item) => (
                <div key={item.id} className="card mb-3">
        <div className="card-body">
            <h1 className="card-title">{item.blood_type}</h1>
            <img src={item.image_url} alt={item.blood_type} className="img-fluid mb-3" />
            <button className="btn btn-danger" onClick={() => handleDeleteBlood(item.id)}>Delete</button>
        </div>
    </div>
))}
</div>

            
            <h2 className="but mt-3">Add New Blood Type</h2>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Blood Type</button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blood Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Blood Type" value={newBloodType} onChange={(e) => setNewBloodType(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Image URL" value={newImageUrl} onChange={(e) => setNewImageUrl(e.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="but" onClick={handleAddBlood}>
                        Add Blood Type
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Blood;





