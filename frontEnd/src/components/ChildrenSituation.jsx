

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'

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
      <h1 className='title'>Main problems faced by children in Tunisia:</h1>
      <p className='para'>Poverty : <br /> The level of poverty in Tunisia is at more than 24%. The gross national  income (GNI) per person is only 3,720 dollars compared with 43,990 dollars in France. Poverty mainly affects the western regions of the country. Unfortunately, the children’s situations are heavily influenced by the economic condition of the country.</p>
      <p className='para'>Right to health : <br />

Despite the significant progress made in Tunisia concerning childrens health, it remains a problem. The infant mortality rate of children younger than 5 years old is 12 ‰, something that needs to be improved.</p>
      <p className='para'>Child emigrants :  <br /> When faced with the institutional and revolutionary crisis that affected Tunisia in 2011, many fled, primarily to Italy and France in search of the “European Ideal”.</p>
      <p className='para'>Child abuse : <br />With physical violence deeply entrenched as a means of punishment in Tunisian society, despite the recent ban through legislation, it is still quite common. Deeply-rooted mentalities are proving difficult to change. </p>
      <input
        type="file"
        onChange={handleFileChange}
      />
      <br />
      <button onClick={uploadImage} className='btnn'>Upload!</button>

      {url && <img src={url} alt="Uploaded" />} {/* Render the image if URL is not empty */}

      
      <div>
        {images.map((image, index) => (
          <img className='imgg' key={index} src={image.image_url} alt={`Uploaded ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ChildrenSituation;
