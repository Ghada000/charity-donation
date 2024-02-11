import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Clothes.css';

function Clothes() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [image_url, setImage_url] = useState('');
  const [size, setSize] = useState(''); // Added size state
  const [gender, setGender] = useState(''); // Added gender state
  const [season, setSeason] = useState(''); // Added season state
  const [input, setInput] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, [editingId]); // Added editingId as a dependency to refresh data after an update

  const fetchData = () => {
    axios.get('http://localhost:5000/clothes/getAll')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
    setSize(selectedClothes.size); // Added size state
    setGender(selectedClothes.gender); // Added gender state
    setSeason(selectedClothes.season); // Added season state
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/clothes/${id}`, {
        name: name,
        image_url: image_url,
        size: size,
        gender: gender,
        season: season,
      });
      const updatedData = data.map(item => {
        if (item.id === id) {
          return response.data; 
        }
        return item;
      });
      setData(updatedData);
      setEditingId(null);
      setImage_url('');
      setName('');
      setSize('');
      setGender('');
      setSeason('');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleAdd = () => {
    const newClothes = {
      name: name,
      image_url: image_url,
      size: size, // Added size field
      gender: gender, // Added gender field
      season: season, // Added season field
    };

    axios.post('http://localhost:5000/clothes/add', newClothes)
      .then(res => {
        setInput(false);
        fetchData(); // Refresh data after successful addition
        // Reset form fields
        setName('');
        setImage_url('');
        setSize('');
        setGender('');
        setSeason('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const isFormValid = name && image_url &&  size && gender && season;

  return (
    <div className="clothes-container">
      <h1 className="title">Browse Our Collection</h1>
      <div className="clothes-grid">
        {data.map((item) => (
          <div key={item.id} className="clothes-card">
            <img src={item.image_url} alt={`Clothes ${item.id}`} />
            <div className="details">
              <h2 className="name">{item.name}</h2>
              <p className="size">Size: {item.size}</p>
              <p className="gender">Gender: {item.gender}</p>
              <p className="season">Season: {item.season}</p>
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
                <input type="text" value={season} onChange={(e) => setSeason(e.target.value)} />
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
              placeholder="Size"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
            <input
              placeholder="Gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            />
            <input
              placeholder="Season"
              value={season}
              onChange={(event) => setSeason(event.target.value)}
            />
            <button className="add-btn" onClick={handleAdd} disabled={!isFormValid}>Add</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Clothes;