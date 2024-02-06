import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    }
    axios.post('http://localhost:5000/medicaments/add', newMedicament)
      .then(res => {
        // Handle success
        console.log(res.data);
        setName('');
        setImage_url('');
        setDescription('');
        setCategory('');
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });
  }

  const isFormValid = name && image_url && description && category;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.category}</h2>
          <h2>{item.name}</h2>
          <h2>{item.description}</h2>
          <img src={item.image_url} alt={`Article ${item.id}`} />

          {editingId === item.id ? (
            <>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" value={image_url} onChange={(e) => setImage_url(e.target.value)} />
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
              <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
              <button onClick={() => handleUpdate(item.id)}>Update</button>
            </>
          ) : (
            <button onClick={() => handleUpdateClick(item.id)}>Update</button>
          )}

          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
      <div className="add-container">
        <button onClick={() => setInput(true)}>add from here</button>
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
          <button onClick={handle}>You saved a life</button>
        )}
      </div>
    </div>
  );
}

export default Medicaments;
