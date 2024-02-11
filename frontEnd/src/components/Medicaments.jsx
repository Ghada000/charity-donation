
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../App.css'
import './css/Medicament.css'
import { Button, Modal } from 'react-bootstrap';

function Medicaments() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [image_url, setImage_url] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [input, setInput] = useState(false);

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/medicaments/get')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/medicaments/${id}`)
      .then(() => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
      })
      .catch(error => console.log(error));
  }

  const handleUpdateClick = (id) => {
    setEditingId(id);
    const selectedMedicament = data.find(item => item.id === id);
    setName(selectedMedicament.name);
    setImage_url(selectedMedicament.image_url);
    setDescription(selectedMedicament.description);
    setCategory(selectedMedicament.category);
  }

  const handleUpdate = (id) => {
    axios.put(`http://localhost:5000/medicaments/${id}`, {
      name: name,
      image_url: image_url,
      description: description,
      category: category
    })
      .then(() => {
        const updatedData = data.map(item => {
          if (item.id === id) {
            return { ...item, name: name, image_url: image_url, description: description, category: category };
          }
          return item;
        });
        setData(updatedData);
        setEditingId(null);
        setImage_url('');
        setDescription('');
        setName('');
        setCategory('');
      })
      .catch(err => console.log(err));
  }

  const handle = () => {
    const newMedicament = {
      name: name,
      description: description,
      image_url: image_url,
      category: category
    };

    axios.post('http://localhost:5000/medicaments/add', newMedicament)
      .then(res => {
        setData([...data, res.data]); 
        setName('');
        setImage_url('');
        setDescription('');
        setCategory('');
        setInput(false); 
      })
      .catch(error => {
        console.log(error);
      });
  };

  const isFormValid = name && image_url && description && category;

  return (
    <div className='con'>
    {data.map((item) => (
      <div className="card" key={item.id}>
        <h2 className='category'>{item.category}</h2>
        <h2 className='name'>{item.name}</h2>
        <h2 className='description'>{item.description}</h2>
        <img className='taswira' src={item.image_url} alt={`Article ${item.id}`}/>
        
        <div className="button-container"> 
          {editingId === item.id ? (

<Modal
show={true}
size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='d-flex flex-column'>
        <label className='row' >
          <span className='col-4'>Update Name:</span>
      <input className='col-8' type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label className='row'>
              <span className='col-4'>Update image_url:</span>
              <input className='col-8' type="text" value={image_url} onChange={(e) => setImage_url(e.target.value)} />
              </label>
              <label className='row' >
              <span className='col-4'>Update description:</span>
              <input  className='col-8' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
              </label>
              <label className='row' >
              <span className='col-4'>Update category:</span>
              <input className='col-8' type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
              </label>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setEditingId(null)}>Close</Button>
        <Button onClick={() => handleUpdate(item.id)}>Update</Button>
      </Modal.Footer>
    </Modal>
          ) : (
            <button className='felsa' onClick={() => handleUpdateClick(item.id)}>Update</button>
          )}
  
          <button className='felsa' onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      </div>
    ))}
    <div className="add-container">
      <button className='zid' onClick={() => setInput(true)}>add from here</button>
      {input && (
        <div className="input-fields">
          <input
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="ImageUrl"
            value={image_url}
            onChange={(event) => setImage_url(event.target.value)}
          />
  
          <input
            placeholder="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            placeholder="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
      )}
      {isFormValid && (
        <button  className='felsa' onClick={handle}>You saved a life</button>
      )}
    </div>
  </div>
  );
}

export default Medicaments;

