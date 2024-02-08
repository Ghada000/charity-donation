// import React, { useState } from 'react';
// import axios from 'axios';

// function ChildrenSituation() {
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState("");

//   const uploadImage = async () => {
//     if (!file) {
//       console.log("No file selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "donation");

//     try {
//       const response = await axios.post(
//         'https://api.cloudinary.com/v1_1/dgxva1ayc/upload',
//         formData
//       );
//       console.log("Image uploaded successfully:", response.data);
//       setUrl(response.data.secure_url); 
//       // Save the image URL to the database
//       await axios.post('http://localhost:5000/children/add', { imageUrl: response.data.secure_url });
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         onChange={handleFileChange}
//       />
//       <br />
//       <button onClick={uploadImage}>Upload!</button>

//       {url && <img src={url} alt="Uploaded" />} {/* Render the image if URL is not empty */}
//     </div>
//   );
// }

// export default ChildrenSituation;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChildrenSituation() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/children/get');
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const uploadImage = async () => {
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "donation");

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dgxva1ayc/upload',
        formData
      );
      console.log("Image uploaded successfully:", response.data);
      setUrl(response.data.secure_url); 
      // Save the image URL to the database
      await axios.post('http://localhost:5000/children/add', { image_url: response.data.secure_url });
      fetchImages(); // Fetch updated list of images after uploading
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
      />
      <br />
      <button onClick={uploadImage}>Upload!</button>

      {url && <img src={url} alt="Uploaded" />} {/* Render the image if URL is not empty */}

      <h2>Uploaded Images</h2>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image.image_url} alt={`Uploaded ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ChildrenSituation;
