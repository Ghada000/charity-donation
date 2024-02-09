import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Clothes.css';

function Clothes() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [image_url, setImage_url] = useState("");
  const [season, setSeason] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [input, setInput] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/clothes/getAll')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/clothes/${id}`)
      .then(() => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
      })
      .catch(error => console.log(error));
  };

  const handleUpdateClick = (id) => {
    setEditingId(id);
    const selectedClothes = data.find(item => item.id === id);
    setName(selectedClothes.name);
    setImage_url(selectedClothes.image_url);
    setSeason(selectedClothes.season);
    setSize(selectedClothes.size);
    setGender(selectedClothes.gender);
  };

  const handleUpdate = (id) => {
    axios.put(`http://localhost:5000/clothes/${id}`, {
      name: name,
      image_url: image_url,
      season: season,
      size: size,
      gender: gender
    })
      .then(() => {
        const updatedData = data.map(item => {
          if (item.id === id) {
            return { ...item, name: name, image_url: image_url, season: season, size: size, gender: gender };
          }
          return item;
        });
        setData(updatedData);
        setEditingId(null);
        setImage_url('');
        setSize('');
        setName('');
        setSeason('');
        setGender('');
      })
      .catch(err => console.log(err));
  };

  const handleAdd = () => {
    const newClothes = {
      name: name,
      image_url: image_url,
      season: season,
      size: size,
      gender: gender
    };
    console.log(newClothes);
    axios.post('http://localhost:5000/clothes/add', newClothes)
      .then(res => {
        console.log(res.data);
        setData([...data, res.data]); // Add the newly added data to the state
        setInput(false); // Close the input fields after adding
      })
      .catch(error => {
        console.log(error);
      });
  };

  const isFormValid = name && image_url && season && size && gender;

  return (
    <div className="clothes-container">
      <h1 className="title">Browse Our Collection</h1>
      <div className="clothes-grid">
        {data.map((item) => (
          <div key={item.id} className="clothes-card">
            <img src={item.image_url} alt={`Clothes ${item.id}`} />
            <div className="details">
              <h2 className="name">{item.name}</h2>
              <p className="description">Season: {item.season}</p>
              <p className="description">Size: {item.size}</p>
              <p className="description">Gender: {item.gender}</p>
              <div className="buttons">
                <button className="update-btn" onClick={() => handleUpdateClick(item.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
            {editingId === item.id && (
              <div className="edit-form">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={image_url} onChange={(e) => setImage_url(e.target.value)} />
                <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                <button onClick={() => handleUpdate(item.id)}>Update</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="add-container">
        <button className="add-btn" onClick={() => setInput(!input)}>Add Clothes</button>
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
              placeholder="Season"
              value={season}
              onChange={(event) => setSeason(event.target.value)}
            />
            <input
              placeholder="Gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            />
            <input
              placeholder="Size"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
            <button className="add-btn" onClick={handleAdd} disabled={!isFormValid}>Add</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Clothes;
