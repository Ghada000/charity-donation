// Blood.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Blood.css';

function AddBloodPopup({ onClose, onAddBlood }) {
  const [newBloodType, setNewBloodType] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  const handleAddBlood = () => {
    onAddBlood(newBloodType, newImageUrl);
    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <input
          type="text"
          placeholder="Blood Type"
          value={newBloodType}
          onChange={(e) => setNewBloodType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
        />
        <button onClick={handleAddBlood}>Add Blood Type</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

function Blood({ term }) {
  const [data, setData] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

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

  const handleAddBlood = (bloodType, imageUrl) => {
    axios.post('http://localhost:5000/blood/', {
      blood_type: bloodType,
      image_url: imageUrl
    })
      .then(function (response) {
        console.log(response);
        fetchData();
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

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="blood-container">
      <h2>Blood Types</h2>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.blood_type}</h1>
          <img src={item.image_url} alt={item.blood_type} />
          <button onClick={() => handleDeleteBlood(item.id)}>Delete</button>
        </div>
      ))}

      <h2>Add New Blood Type</h2>
      <button onClick={openPopup}>Add Blood Type</button>

      {isPopupVisible && (
        <div className="blur-background">
          <AddBloodPopup onClose={closePopup} onAddBlood={handleAddBlood} />
        </div>
      )}
    </div>
  );
}

export default Blood;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Blood({term}) {
//     const [data, setData] = useState([]);
//     const [newBloodType, setNewBloodType] = useState('');
//     const [newImageUrl, setNewImageUrl] = useState('');

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = () => {
//         axios.get('http://localhost:5000/blood/get')
//             .then(function (response) {
//                 setData(response.data);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     };

//     const handleAddBlood = () => {
//         axios.post('http://localhost:5000/blood/', {
//             blood_type: newBloodType,
//             image_url: newImageUrl
//         })
//         .then(function (response) {
//             console.log(response);
//             fetchData();
//             // Reset form fields
//             setNewBloodType('');
//             setNewImageUrl('');
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
//     };

//     const handleDeleteBlood = (id) => {
//         axios.delete(`http://localhost:5000/blood/${id}`)
//             .then(function (response) {
//                 console.log(response);
//                 fetchData();
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     };

   

//     return (
//         <div>
//             <h2>Blood Types</h2>
//             {data.map((item) => (
//                 <div key={item.id}>
//                     <h1>{item.blood_type}</h1>
//                     <img src={item.image_url} alt={item.blood_type} />
//                     <button onClick={() => handleDeleteBlood(item.id)}>Delete</button>
//                 </div>
//             ))}

//             <h2>Add New Blood Type</h2>
//             <input type="text" placeholder="Blood Type" value={newBloodType} onChange={(e) => setNewBloodType(e.target.value)} />
//             <input type="text" placeholder="Image URL" value={newImageUrl} onChange={(e) => setNewImageUrl(e.target.value)} />
//             <button onClick={handleAddBlood}>Add Blood Type</button>
//         </div>
//     );
// }

// export default Blood;
